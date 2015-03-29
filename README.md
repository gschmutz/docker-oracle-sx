# Oracle Stream Explorer (12c)

This is a Dockerfile for [Oracle Stream Explorer 12c](http://www.oracle.com/technetwork/middleware/complex-event-processing/documentation/index.html). The purpose of this Docker container is to facilitate the setup of development and integration testing environments for developers.

**IMPORTANT**: Oracle **does not support Docker** in any environment, including but not limited to Development, Integration, and Production environments.

## How to Build

Follow this procedure:

1. Checkout the GitHub docker-oracle-sx repository

        git checkout git@github.com:gschmutz/docker-oracle-sx.git

2. Go to the **stream-explorer** folder

        cd docker-oracle-sx/stream-explorer

3. [Download](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html) and drop the Oracle JDK 7u75 RPM 64bit file **jdk-7u75-linux-x64.rpm** in this folder

		Linux x64	120.83 MB  	jdk-7u75-linux-x64.rpm

4. [Download](http://www.oracle.com/technetwork/middleware/complex-event-processing/downloads/index.html) and drop the Stream Explorer 12.1.3 Runtime file **fmw_12.1.3.0.0_oep.jar** in this folder

		Stream Explorer 12.1.3 Runtime (439 MB) - fmw_12.1.3.0.0_oep.jar

5. [Download](http://www.oracle.com/technetwork/middleware/complex-event-processing/downloads/index.html) and drop the Stream Explorer 12.1.3 Runtime file **fmw_12.1.3.0.0_oep.jar** in this folder

		Stream Explorer 12.1.3 Runtime (439 MB) - fmw_12.1.3.0.0_oep.jar

5. Execute the build script as **root**

        $ sudo sh build.sh

## Booting up Oracle WebLogic 12c on Docker

Along with the Dockerfile, two scripts are also provided to help you run either one server (Admin Server) or two or more servers (Node Managers) to allow you to setup a cluster.

 * dockWebLogic.sh
 * dockNodeManager.sh

To boot the WebLogic Admin Server, execute

    dockWebLogic.sh -attach

The argument '-attach' in this script will automatically bind port 7001 to the host. You will then be able to access the Admin Console at http://localhost:7001/console. If you don't use this argument, the script will tell you which IP address this container is running on and present you with the URL to open the Admin Console.

On mac you can use `boot2docker ip` to find out your ip for the weblogic console forwarding address

To boot a Node Manager to be able to setup a cluster, execute

    dockNodeManager.sh

This script will automagically start a Node Manager and add itself to the Admin Server as a new Machine. After this, go to the Admin Console and setup a cluster by creating either a regular one, or a Dynamic Cluster.

## Deploying Java EE Applications

You can use the web-based [Administration Console](http://docs.oracle.com/middleware/1213/core/ASADM/getstart.htm#ASADM10025), the [WebLogic Maven Plugin](http://docs.oracle.com/middleware/1213/wls/WLPRG/maven.htm), the [WebLogic Deployer](http://docs.oracle.com/middleware/1213/wls/DEPGD/deploy.htm), or the [WLST](http://docs.oracle.com/middleware/1213/wls/WLSTG/config_wls.htm#i1027344) (WebLogic Scripting Tool) to deploy applications to the remote servers running on Docker containers.

## Dockerfile Source
All source is on the [weblogic-docker GitHub repository](https://github.com/weblogic-community/weblogic-docker).

## Issues
If you find any issues, please report through the [GitHub Issues page](https://github.com/weblogic-community/weblogic-docker/issues) with label "**Generic**".

## License
To download and run WebLogic 12c Distribution regardless of inside or outside a Docker container, and regardless of Generic or Developer distribution, you must agree and accept the [OTN Free Developer License Terms](http://www.oracle.com/technetwork/licenses/wls-dev-license-1703567.html).

To download and run Oracle JDK regardless of inside or outside a DOcker container, you must agree and accept the [Oracle Binary Code License Agreement for Java SE](http://www.oracle.com/technetwork/java/javase/terms/license/index.html).

All scripts and files hosted in this project and GitHub [weblogic-docker](https://github.com/weblogic-community/weblogic-docker/) repository required to build the Docker images are, unless otherwise noted, released under the Common Development and Distribution License (CDDL) 1.0 and GNU Public License 2.0 licenses.
