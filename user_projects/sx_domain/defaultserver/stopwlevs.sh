#!/bin/sh

. ./setDomainEnv.sh $*

USER_CONFIG_FILE=config/security-config.xml
KEY_FILE=.aesinternal.dat

"$JAVA_HOME/bin/java" $JVM_D64 -jar "${USER_INSTALL_DIR}/bin/wlevsadmin.jar" -userconfigfile $USER_CONFIG_FILE -userkeyfile $KEY_FILE $* SHUTDOWN
