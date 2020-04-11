# Multi-Threading
[Multithreading Code - Computerphile video](https://www.youtube.com/watch?v=7ENFeb-J75k)

The concept of multi-threading needs proper understanding of these two terms – a process and a thread. A process is a program being executed. A process can be further divided into independent units known as threads.

A thread is a path which is followed during a program’s execution.

### When should you use multithreading? 

Systems using heavy CPU, comms, multi-user, UIs where you do a heavy processing in a background thread but the UI is still active

### Would multi threading be beneficial if the different threads execute mutually independent tasks?

Multithreading would surely be beneficial if the threads process mutually independent data in a concurrent fashion - it reduces requirements for (mutex) locks and probabilty of deadlocks increases in a super-linear fashion with the number of locks. OTOH, there is no issue with threads executing the same code, this is safe and very common.

### Benefits of Multithreading
1. Responsiveness –
Multithreading in an interactive application may allow a program to continue running even if a part of it is blocked or is performing a lengthy operation, thereby increasing responsiveness to the user.
In a non multi threaded environment, a server listens to the port for some request and when the request comes, it processes the request and then resume listening to another request. The time taken while processing of request makes other users wait unnecessarily. Instead a better approach would be to pass the request to a worker thread and continue listening to port.

For example, a multi threaded web browser allow user interaction in one thread while an video is being loaded in another thread. So instead of waiting for the whole web-page to load the user can continue viewing some portion of the web-page.

2. Resource Sharing –
Processes may share resources only through techniques such as-
- Message Passing
- Shared Memory
Such techniques must be explicitly organized by programmer. However, threads share the memory and the resources of the process to which they belong by default.
The benefit of sharing code and data is that it allows an application to have several threads of activity within same address space.

3. Scalability –
The benefits of multi-programming greatly increase in case of multiprocessor architecture, where threads may be running parallel on multiple processors. If there is only one thread then it is not possible to divide the processes into smaller tasks that different processors can perform.
Single threaded process can run only on one processor regardless of how many processors are available.
Multi-threading on a multiple CPU machine increases parallelism.


### Mutex
Mutex (mutually exclusive) lock/unlock token to allow global variable manipulation

ex: When I am having a big heated discussion at work, I use a rubber chicken which I keep in my desk for just such occasions. The person holding the chicken is the only person who is allowed to talk. If you don't hold the chicken you cannot speak. You can only indicate that you want the chicken and wait until you get it before you speak. Once you have finished speaking, you can hand the chicken back to the moderator who will hand it to the next person to speak. This ensures that people do not speak over each other, and also have their own space to talk.

Replace Chicken with Mutex and person with thread and you basically have the concept of a mutex.