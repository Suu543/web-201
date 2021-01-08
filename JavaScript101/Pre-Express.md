# Pre-Express

1. HTTP ----> TCP / UDP
2. NodeJS Web Server

Cloud는 실제로 존재하는 것이 아니다. 이것은 그냥 수 많은 컴퓨터가 연결된 형태를 의미한다. Computer Talking to Computer



컴퓨터끼리 말하면서 packet이라는 것을 서로 주고받는다. Packet - little stream of data

앉아서 컴퓨터에 url을 입력하면 data가 client <---> server사이에 왔다갔다한다. 그리고 이 데이터는 packet의 형태를 가지고 있다.

Express를 사용하는 것은 server를 책임진다는 것을 의미한다. packet을 몰라도 데이터의 전달을 할 수 있다. 왜냐하면 NodeJS의 Express가 이 역할을 대신해주기 때문이다.



Networking Protocol을 아주 간단히 알아보자 왜냐하면 express는 내부적으로 Networking에 연관되어 있기 때문이다.

Packet은

Physical --> Link --> Network --> Transport --> Application Layer로 구성되어있다.

데이터를 주고 받으면서 어떻게 서로 상호작용하는지 알아보자

Physical Layer의 예시는 케피블이 될 수 있다.

Link는 와이파이, 이더넷이 될 수 있다.

Network는 IP가 될 수 있다.

Transport는 UDP/TCP가 될 수 있다.

Network + Transport를 TCP/IP라 칭한다.

Application Layer가 HTTP/FTP/SSH/SMTP 등이 될 수 있다.



Express는 오직 HTTP Request만 다룰 수 있다.

하지만 HTTP는 Transport Layer을 사용하기 때문에 우리는 이것에 대한 이해를 가지고 있어야 한다.



당신은 컴퓨터가 있고 어떤 종류에 인터넷에 연결되어있다.

Transport Layer는 약 2^16개의 포트를 생성한다. Node는 3000을 주로 사용한다. 

Rails or Flask는 5000번을 사용한다. 



A라는 건물을 생각해보자.

1층 101 호: 병원, 2층 201 호: 원룸, 3층 301 호: B회사

B 라는 사람이 A라는 건물에 방문했을때 B는 어떤 방식으로 건물에 접근할 까?

가장 쉽게 생각할 수 있는 방식은 가고자 하는 호수를 기억하고, 데스크의 직원에게 문의해서 찾아가는 방식이다.

호수는 path 로 생각하고, 데스크 직원은 Browser or Internet이라 생각하면된다. Route는 이처럼 건물의 각 호 에서 어떤 일을 행하는 지 명시하는 방식이라 생각하면이해가 쉽다.



49742라는 포트에 HTTP 요청이 발생했다. 이 요청은 Segment 에 wrap up 된다. 

이 내부에는 Destination Port 80, Source Port 49742 --> 이것을 Transport Layer는 Network Layer로 부터 받는다. 그리고 Right Port를 찾는다.



UDP 

- Lightweight
- 8 Bytes
- Connectionless ( 니가 데이터를 보내고 싶을때 연결을 먼저 할 필요가 없이 그냥 데이터를 계속 보낸다. 컴퓨터가 내 말을 듣기 싫어도 그냥 계속 보낸다)
- 니가 준비되면 그냥 보내면 된다는 장점이있다. 
- consistency
  - Send data no matter what!!
- Packet Loss? UDP does not care!
- Packet Out of Order
- VERY VERY FAST 하다는 장점이 있다. 단 Packet Loss는 전혀 신경쓰지 않는다.

- Incredible Unreliable



TCP 

- Connection-Based
- 말을 시작하려면 Three-Way-Handshake를 이용해
- 1. Client: I'd like to talk
  2. Server: Yes or No
  3. Client: Actually data move around
- Reliable
- Delivery Acknowledgement
- Retransmission Data (Sever can let the client that I didn't get the data) 

- In-Order-Packet (TCP guarantees that packet will be arrived right order)
- Congestion Control



UDP:

Fast, can be unreliable

Live Experience (Gaming, Live Chatting, etc)

  UDP: Rolle, oli

Can't guarantee the sequence of the packet



TCP:

Relatively Slow, HTTP, can be reliable

Client: Hello Rob



TCP/IP --> Two computers ready to talk to each other.

Us

https://medium.com/@adamzerner/overview-of-computer-networking-70848bd62710

----------------------------------------------

## What is an HTTP Request and how does it work?

![image-20210105115059419](C:\Users\jos50\AppData\Roaming\Typora\typora-user-images\image-20210105115059419.png)

Application Layer에 HTTP가 머무르는 곳이다.

- info.cern.ch --> 첫 번째 웹페에지다 만들어진

- HTTP는 HTML만 보내는 것이 아닌, 이미지, 4K Videos, MP4 등 모든 종류를 전송한다.

- HTTP는 TCP에 기반을 둔다. HTTP는 엄청나게 효율적이다. TCP는 연결에 기반을 둔다. TCP는 연결된 채로 남는다. HTTP는 is only connected when required. 
- HTTP는 Stateless --> No dialogue. 연결이 끝나면 모든 것들을 잃는다. 오직 연결된 상태에서만 서로를 알 수 있다. 니가 방금 말한 것만 기억한다 = stateless. 하나 말하고 하나 기억하고 처리하고 잊고 이러한 일련의 과정을 따라간다.
- Udemy.com에 접속한다. --> 사용자는 인터넷 연결을 한다(ISP) 그리고 TCP/IP를 이용해 Host Machine (Udemy Server)로 간다. 이 과정에 Three-Ways Handshake가 발생한다.

![image-20210105115709463](C:\Users\jos50\AppData\Roaming\Typora\typora-user-images\image-20210105115709463.png)

