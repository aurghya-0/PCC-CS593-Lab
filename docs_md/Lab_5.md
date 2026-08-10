# Lab 5 — Multithreaded Programming

This lab covers thread creation (extending `Thread` and implementing `Runnable`), synchronization, thread priorities, inter-thread communication, and the producer-consumer pattern.

---

## Program1_ThreadExtends.java

**Path:** `Lab_5/Program1_ThreadExtends.java`  
**Concept:** Creating threads by extending `Thread`

### Description
`MyThread` extends `Thread` and overrides `run()`. Two thread instances are created and started with `start()`.

### Classes
| Class | Role |
|-------|------|
| `MyThread` | Extends `Thread`, overrides `run()` |
| `Program1_ThreadExtends` | Creates and starts two threads |

### How to Run
```bash
cd Lab_5
javac Program1_ThreadExtends.java && java Program1_ThreadExtends
```

---

## Program2_ThreadRunnable.java

**Path:** `Lab_5/Program2_ThreadRunnable.java`  
**Concept:** Creating threads by implementing `Runnable`

### Description
`Task` implements `Runnable`. Two `Thread` objects share the same `Task` instance. Demonstrates the preferred approach when extending another class is not possible.

### Classes
| Class | Role |
|-------|------|
| `Task` | Implements `Runnable` |
| `Program2_ThreadRunnable` | Wraps `Task` in `Thread` objects |

### How to Run
```bash
javac Program2_ThreadRunnable.java && java Program2_ThreadRunnable
```

---

## Program3_ThreadSynchronization.java

**Path:** `Lab_5/Program3_ThreadSynchronization.java`  
**Concept:** Thread synchronization

### Description
Two threads each increment a shared `Counter` 1000 times. The `increment()` method is `synchronized` to prevent race conditions. Without synchronization, the final count would be less than 2000.

### Classes
| Class | Role |
|-------|------|
| `Counter` | Shared resource with `synchronized increment()` |
| `Program3_ThreadSynchronization` | Two threads incrementing concurrently |

### How to Run
```bash
javac Program3_ThreadSynchronization.java && java Program3_ThreadSynchronization
```

### Expected Output
```
Final count: 2000
```

---

## Program4_ThreadPriority.java

**Path:** `Lab_5/Program4_ThreadPriority.java`  
**Concept:** Thread priorities

### Description
Two threads are assigned `MIN_PRIORITY` and `MAX_PRIORITY` using `setPriority()`. Higher-priority threads are more likely to run first (OS-dependent).

### Classes
| Class | Role |
|-------|------|
| `PriorityThread` | Extends `Thread`, prints name and priority |
| `Program4_ThreadPriority` | Sets and starts threads with different priorities |

### How to Run
```bash
javac Program4_ThreadPriority.java && java Program4_ThreadPriority
```

---

## Program5_InterThreadCommunication.java

**Path:** `Lab_5/Program5_InterThreadCommunication.java`  
**Concept:** Inter-thread communication (`wait` / `notify`)

### Description
A `Message` class acts as a shared buffer. A producer thread calls `produce()` and a consumer calls `consume()`. `synchronized`, `wait()`, and `notify()` coordinate access.

### Classes
| Class | Role |
|-------|------|
| `Message` | Shared buffer with `produce()` and `consume()` |
| `Program5_InterThreadCommunication` | Spawns producer and consumer threads |

### Key APIs
- `synchronized` methods
- `wait()` — thread releases lock and waits
- `notify()` — wakes a waiting thread

### How to Run
```bash
javac Program5_InterThreadCommunication.java && java Program5_InterThreadCommunication
```

---

## Program6_ThreadJoin.java

**Path:** `Lab_5/Program6_ThreadJoin.java`  
**Concept:** Thread `join()`

### Description
The main thread starts a `Worker` thread and calls `join()` to wait until the worker finishes before continuing. Demonstrates thread coordination.

### Classes
| Class | Role |
|-------|------|
| `Worker` | Sleeps 2 seconds in `run()` |
| `Program6_ThreadJoin` | Main thread waits via `worker.join()` |

### How to Run
```bash
javac Program6_ThreadJoin.java && java Program6_ThreadJoin
```

---

## Program7_MultipleThreads.java

**Path:** `Lab_5/Program7_MultipleThreads.java`  
**Concept:** Multiple concurrent threads with `sleep()`

### Description
Three `Printer` threads each print a message 3 times with 500ms pauses between iterations, demonstrating concurrent execution and `Thread.sleep()`.

### Classes
| Class | Role |
|-------|------|
| `Printer` | Extends `Thread`, prints with sleep |
| `Program7_MultipleThreads` | Starts three printer threads |

### How to Run
```bash
javac Program7_MultipleThreads.java && java Program7_MultipleThreads
```

---

## Program8_ProducerConsumer.java

**Path:** `Lab_5/Program8_ProducerConsumer.java`  
**Concept:** Producer-Consumer pattern

### Description
A bounded `SharedQueue` (capacity 5) is shared between a producer thread (adds values 1–5) and a consumer thread. Uses `wait()` / `notifyAll()` when the queue is full or empty.

### Classes
| Class | Role |
|-------|------|
| `SharedQueue` | Bounded buffer with synchronized produce/consume |
| `Program8_ProducerConsumer` | Spawns producer and consumer with different sleep rates |

### How to Run
```bash
javac Program8_ProducerConsumer.java && java Program8_ProducerConsumer
```

### Key Concepts
- Bounded buffer
- `notifyAll()` to wake all waiting threads
- Producer waits when full; consumer waits when empty
