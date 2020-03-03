# Alpine Linux (VM VirtualBox) configuration for internet access and connection between VMs and the Host.

/etc/network/interfaces
```
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet dhcp
    hostname tony
```

/etc/ssh/sshd_config
```
PermitRootLogin yes
PasswordAuthentication yes
```
Not recommended though to leave it like this; create a different sudo user!

## Adapter settings for port forwarding

```
Network adapters (VM)
Adapter 1: NAT
Adapter 2: Host-only (Allow VMs)

Adapter 1 port forwarding:
    SSH | TCP | 127.0.0.1 | 2522 | 10.0.2.15 | 22
```

## Transfer files between machines
`scp -P 2522 ./test123.txt root@localhost:/tmp/`



