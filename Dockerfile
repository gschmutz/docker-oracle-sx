# LICENSE CDDL 1.0 + GPL 2.0
#
# TRIVADS DOCKERFILES PROJECT
# ---------------------------
# This is the Dockerfile for Oracle Stream Explorer 12.1.3 (Full) Generic Distribution
#
# Credits to Bruno Borges who created the Docker weblogic Dockerfile and where this Dockerfile is based on. 
# 
# REQUIRED BASE IMAGE TO BUILD THIS IMAGE
# ---------------------------------------
# Make sure you have oraclelinux:7.0 Docker image installed.
# Visit for more info: 
#  - http://public-yum.oracle.com/docker-images/
#
# REQUIRED FILES TO BUILD THIS IMAGE
# ----------------------------------
# (1) fmw_12.1.3.0.0_oep.jar
#     Download the Generic installer from http://www.oracle.com/technetwork/middleware/weblogic/downloads/wls-for-dev-1703574.html
#
# (2) jdk-7u75-linux-x64.rpm
#     Download from http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
#
# HOW TO BUILD THIS IMAGE
# -----------------------
# Put all downloaded files in the same directory as this Dockerfile
# Run: 
#      $ sudo docker build -t gschmutz/sx:12.1.3 . 
#

# Pull base image
# ---------------
FROM oraclelinux:7.0

# Maintainer
# ----------
MAINTAINER Guido Schmutz <guido.schmutz@trivadis.com>

# Set Working directory
# ---------------------
WORKDIR /u01

# Environment variables required for this build (do NOT change)
ENV JAVA_RPM jdk-7u75-linux-x64.rpm
ENV SX_VERSION 12.1.3.0.0
ENV SX_PKG fmw_12.1.3.0.0_oep.jar
ENV SX_PATCH 20225179

# WLS Admin Password (you may change)
# This password is used for:
#  (a) 'oracle' Linux user in this image
# -----------------------------------
ENV ADMIN_PASSWORD welcome1

# Install unzip
# -------------
RUN apt-get install -y unzip

# Install and configure Oracle JDK 8u25
# -------------------------------------
COPY stream-explorer/$JAVA_RPM /root/
RUN rpm -i /root/$JAVA_RPM && \ 
    rm /root/$JAVA_RPM
ENV JAVA_HOME /usr/java/default
ENV CONFIG_JVM_ARGS -Djava.security.egd=file:/dev/./urandom

# Setup required packages (unzip), filesystem, and oracle user
# ------------------------------------------------------------
RUN mkdir /u01 && \ 
    chmod a+xr /u01 && \ 
    useradd -b /u01 -m -s /bin/bash oracle && \ 
    echo oracle:$ADMIN_PASSWORD | chpasswd

COPY stream-explorer/*.zip /tmp
RUN unzip -uo /tmp/ofm_sx_generic_$SX_VERSION_disk1_1of2.zip /u01
RUN unzip -uo /tmp/ofm_sx_generic_$SX_VERSION_disk1_2of2.zip /u01

# Add files required to build this image
COPY setup/* /u01/
COPY user_projects /u01/

RUN  chmod -R a+xr /u01/sx_domain

# Adjust file permissions, go to /u01 as user 'oracle' to proceed with WLS installation
RUN chown oracle:oracle -R /u01
WORKDIR /u01
USER oracle

# Installation of Oracle Event Processing
RUN mkdir /u01/oracle/.inventory
RUN java -jar $SX_PKG -silent -responseFile /u01/install.file -invPtrLoc /u01/oraInst.loc -jreLoc $JAVA_HOME && \
    rm $SX_PKG /u01/oraInst.loc /u01/install.file

ENV ORACLE_HOME /u01/oracle/oep12c
RUN /u01/oracle/oep12c/OPatch/opatch apply /u01/20225179 -silent 

WORKDIR /u01/oracle/oep12c
USER oracle

RUN mkdir /u01/oracle/oep12c/user_projects
RUN mv /u01/sx_domain /u01/oracle/oep12c/user_projects/
RUN rm -R /u01/20225179

# Expose OEP port
EXPOSE 9002

WORKDIR /u01/oracle/oep12c/user_projects/sx_domain/defaultserver

ENV PATH /u01/oracle/oep12c/user_projects/sx_domain/defaultserver

# Define default command to start bash. 
CMD ["/u01/oracle/oep12c/user_projects/sx_domain/defaultserver/startwlevs.sh"]
