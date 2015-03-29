#!/bin/sh

umask 027

. ./setDomainEnv.sh $*

DEBUG_PORT=8453
DEBUG_ARGS=
JVM_ARGS=
ARGS=

if [ $JAVA_VENDOR = "Sun" ]
then
  JVM_ARGS="-server -XX:MaxPermSize=128m -XX:+UseConcMarkSweepGC -XX:+UnlockDiagnosticVMOptions -XX:+UnsyncloadClass"
fi

while [ -n "$1" ]
do
  case "$1" in
  -dgc) if [ $JAVA_VENDOR != "Oracle" ]
        then
           echo "dgc option may be used with JRockit only."
           exit
        else
          JVM_ARGS="$JVM_ARGS -Xgcprio:deterministic -XpauseTarget=10ms"
        fi
  ;;
  -debug) DEBUG_ARGS="-agentlib:jdwp=transport=dt_socket,address=${DEBUG_PORT},server=y,suspend=n"
  ;;
  -debugPort) shift; DEBUG_PORT=$1;
  DEBUG_ARGS="-agentlib:jdwp=transport=dt_socket,address=${DEBUG_PORT},server=y,suspend=n"
  ;;
  *) ARGS="$ARGS $1"
  ;;
  esac
  shift
done

"$JAVA_HOME/bin/java" $JVM_ARGS $JVM_D64 $DEBUG_ARGS -Dwlevs.home="$USER_INSTALL_DIR" -jar "${USER_INSTALL_DIR}/bin/wlevs.jar" $ARGS

