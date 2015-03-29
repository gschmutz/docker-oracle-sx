JAVA_HOME="/usr/java/jdk1.7.0_75"
JAVA_VENDOR="Oracle"
BEA_HOME="/u01/oracle/oep12c"
USER_INSTALL_DIR="/u01/oracle/oep12c/oep"

if [ "${JAVA_VENDOR}" = "Oracle" ]; then
 JAVA_VENDOR_TMP=Sun
 if [ -d "${JAVA_HOME}/jre/bin/jrockit" ]; then
  JAVA_VENDOR_TMP=Oracle
 else
  for jrpath in "${JAVA_HOME}"/jre/lib/*
   do
    if [ -d "${jrpath}/jrockit" ]; then
     JAVA_VENDOR_TMP=Oracle
    fi
   done
 fi
 JAVA_VENDOR=${JAVA_VENDOR_TMP}
fi

#64 bit environment setting
#JAVA_USE_64BIT, true if JVM uses 64 bit operations
JAVA_USE_64BIT=false

# add -d64 for hpux and solaris 64 bit arch.
JVM_D64=
case `uname -s` in
HP-UX)
   arch=`uname -m`
   if [ "${arch}" = "pa-risc" ] || [ "${arch}" = "ia64" ]; then
     JAVA_USE_64BIT=true
   fi
;;
SunOS)
   arch=`uname -m`
   if [ "${arch}" = "i86pc" ] || [ "${arch}" = "sparc" ]; then
     JAVA_USE_64BIT=true
   fi
;;
esac

if [ "${JAVA_USE_64BIT}" = "true" ] && [ "${JAVA_VENDOR}" != "Oracle" ]
then
  JVM_D64="-d64"
fi

