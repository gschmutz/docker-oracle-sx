# Oracle Stream Explorer (12c)

This is a Dockerfile for [Oracle Stream Explorer 12c](http://www.oracle.com/technetwork/middleware/complex-event-processing/documentation/index.html). The purpose of this Docker container is to facilitate the setup of development and integration testing environments for developers.

**IMPORTANT**: Oracle **does not support Docker** in any environment, including but not limited to Development, Integration, and Production environments.

## How to Build

Follow this procedure:

1. Checkout the GitHub docker-oracle-sx repository

        git checkout git@github.com:gschmutz/docker-oracle-sx.git

2. Go to the **downloads** folder

        cd docker-oracle-sx/downloads

3. [Download](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html) and drop the Oracle JDK 7u75 RPM 64bit file **jdk-7u75-linux-x64.rpm** in the **downloads** folder

		Linux x64	120.83 MB  	jdk-7u75-linux-x64.rpm

4. [Download](http://www.oracle.com/technetwork/middleware/complex-event-processing/downloads/index.html) and drop the Stream Explorer 12.1.3 Runtime file **ofm_sx_generic_12.1.3.0.0_disk1_1of2.zip** in the **downloads** folder

		Stream Explorer 12.1.3 Runtime (439 MB) - ofm_sx_generic_12.1.3.0.0_disk1_1of2.zip

5. [Download](http://www.oracle.com/technetwork/middleware/complex-event-processing/downloads/index.html) and drop the Stream Explorer 12.1.3 User Experience file **ofm_sx_generic_12.1.3.0.0_disk1_2of2.zip** in the **downloads** folder

		Stream Explorer 12.1.3 User Experience Size (32 MB) - ofm_sx_generic_12.1.3.0.0_disk1_2of2.zip

5. Build docker-oracle-sx using the Dockerfile

        $ docker build -t gschmutz/docker-oracle-sx:12.1.3 . 

6. To run an instance of Oracle Stream Explorer

        $ docker run -d -p 9002:9002 gschmutz/docker-oracle-sx:12.1.3


## Issues
If you find any issues, please report through the [GitHub Issues page](https://github.com/gschmutz/docker-oracle-sx/issues) with label "**Generic**".

## License
To download and run Oracle Stream Explorer regardless of inside or outside a Docker container, and regardless of Generic or Developer distribution, you must agree and accept the [OTN Free Developer License Terms](http://www.oracle.com/technetwork/licenses/standard-license-152015.html).

To download and run Oracle JDK regardless of inside or outside a DOcker container, you must agree and accept the [Oracle Binary Code License Agreement for Java SE](http://www.oracle.com/technetwork/java/javase/terms/license/index.html).

All scripts and files hosted in this project and GitHub [docker-oracle-sx](https://github.com/gschmutz/docker-oracle-sx/) repository required to build the Docker images are, unless otherwise noted, released under the Common Development and Distribution License (CDDL) 1.0 and GNU Public License 2.0 licenses.
