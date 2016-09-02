#!/bin/bash

  	gen_passwd=$(< /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c${1:-10})
	mac_addr=$(ifconfig | grep HWaddr | cut -d' ' -f11)
	##ssh panzar@192.168.8.11 ifconfig | grep HWaddr | cut -d' ' -f11
	/usr/bin/nodejs ./create_device.js "HBIII" "$gen_passwd" "$mac_addr"
	
