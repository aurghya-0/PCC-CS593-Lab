export const lab5 = {
  id: 5,
  slug: 'lab-5',
  title: 'Lab 5 — Multithreaded Programming',
  description:
    'Thread creation (extending Thread and implementing Runnable), synchronization, thread priorities, inter-thread communication (wait/notify), join, and producer-consumer pattern.',
  folder: 'Lab_5',
  programs: [
    {
      name: 'Program1_ThreadExtends.java',
      path: 'Lab_5/Program1_ThreadExtends.java',
      concept: 'Thread by extending Thread',
      description:
        'Creates threads by subclassing the Thread class and overriding its run() method. Two MyThread instances execute concurrently, each printing its thread name and a count from 1 to 5.',
      purpose:
        'Multithreading allows concurrent execution — multiple tasks run seemingly at the same time. Extending Thread is one of two standard ways to create threads in Java.',
      howItWorks: [
        'MyThread extends Thread and overrides run() with a loop printing 1 to 5.',
        'main() creates two MyThread objects: t1 and t2.',
        't1.start() and t2.start() launch both threads concurrently.',
        'start() tells the JVM to call run() in a new thread (not run() directly!).',
        'Both threads interleave their output — order is non-deterministic.',
        'getName() returns the thread\'s assigned name for identification.',
      ],
      notes: [
        'Never call run() directly — always use start() to create a new thread.',
        'Extending Thread uses up the single inheritance slot.',
        'Each thread has its own stack and executes independently.',
        'Thread scheduling is OS-dependent — output order varies each run.',
      ],
      run: 'cd Lab_5\njavac Program1_ThreadExtends.java && java Program1_ThreadExtends',
      output: 'Interleaved Thread-0 and Thread-1 counts from 1 to 5',
    },
    {
      name: 'Program2_ThreadRunnable.java',
      path: 'Lab_5/Program2_ThreadRunnable.java',
      concept: 'Thread by implementing Runnable',
      description:
        'Creates threads by implementing the Runnable interface. Task defines the work in run(); Thread objects wrap the Task and execute it. Two threads share the same Task instance.',
      purpose:
        'Implementing Runnable is preferred over extending Thread because it separates the task from the thread mechanism and leaves the inheritance slot free for another class.',
      howItWorks: [
        'Task implements Runnable with a run() method that prints counts 1 to 5.',
        'main() creates one Task object shared by two threads.',
        'Thread t1 = new Thread(task, "Thread-A") wraps the task with a name.',
        'Thread t2 = new Thread(task, "Thread-B") creates a second thread on the same task.',
        'Both threads start() and execute run() concurrently.',
        'Thread.currentThread().getName() identifies which thread is printing.',
      ],
      notes: [
        'Runnable is a functional interface with one method: run().',
        'Preferred approach — implements Runnable, passes to new Thread(runnable).',
        'Same Runnable can be shared by multiple threads.',
        'ExecutorService (java.util.concurrent) is the modern alternative for thread pools.',
      ],
      run: 'javac Program2_ThreadRunnable.java && java Program2_ThreadRunnable',
      output: 'Interleaved Thread-A and Thread-B counts from 1 to 5',
    },
    {
      name: 'Program3_ThreadSynchronization.java',
      path: 'Lab_5/Program3_ThreadSynchronization.java',
      concept: 'Thread synchronization',
      description:
        'Demonstrates a race condition fix using synchronized. Two threads each increment a shared Counter 1000 times. Without synchronized, the final count would be less than 2000 due to lost updates.',
      purpose:
        'When multiple threads access shared mutable data, race conditions corrupt results. synchronized ensures only one thread executes a critical section at a time, maintaining data integrity.',
      howItWorks: [
        'Counter has a private int count and a synchronized increment() method.',
        'synchronized on increment() acquires the object\'s intrinsic lock.',
        'Two threads each run a loop calling counter.increment() 1000 times.',
        'Only one thread can execute increment() at a time — no lost updates.',
        'main() calls t1.join() and t2.join() to wait for both to finish.',
        'Final count is reliably 2000 every time.',
      ],
      notes: [
        'Race condition: multiple threads read-modify-write the same variable concurrently.',
        'synchronized prevents interleaved access to critical sections.',
        'Without it, count++ is not atomic (read, add, write — three steps).',
        'Always protect shared mutable state with synchronization or concurrent utilities.',
      ],
      run: 'javac Program3_ThreadSynchronization.java && java Program3_ThreadSynchronization',
      output: 'Final count: 2000',
    },
    {
      name: 'Program4_ThreadPriority.java',
      path: 'Lab_5/Program4_ThreadPriority.java',
      concept: 'Thread priorities',
      description:
        'Assigns different priorities to threads using setPriority(). A high-priority thread is more likely to be scheduled before a low-priority one, though actual behaviour depends on the operating system.',
      purpose:
        'Thread priorities hint to the scheduler which threads are more important. Useful for time-sensitive tasks, though should not be relied upon for correctness.',
      howItWorks: [
        'PriorityThread extends Thread and prints its name and priority in run().',
        't1 is set to Thread.MIN_PRIORITY (1).',
        't2 is set to Thread.MAX_PRIORITY (10).',
        't2.start() is called before t1.start().',
        'Each thread prints its name and current priority value.',
        'The high-priority thread typically runs first, but OS scheduling may vary.',
      ],
      notes: [
        'Priority range: MIN_PRIORITY (1) to MAX_PRIORITY (10), default NORM_PRIORITY (5).',
        'Priority is a hint to the JVM/OS — not a guarantee.',
        'Do not use priorities to enforce ordering — use synchronization instead.',
        'Platform-specific behaviour makes priorities unreliable for logic.',
      ],
      run: 'javac Program4_ThreadPriority.java && java Program4_ThreadPriority',
      output: 'High-Priority thread running with priority: 10\nLow-Priority thread running with priority: 1',
    },
    {
      name: 'Program5_InterThreadCommunication.java',
      path: 'Lab_5/Program5_InterThreadCommunication.java',
      concept: 'Inter-thread communication (wait/notify)',
      description:
        'Two threads coordinate through a shared Message object. A producer thread calls produce() to set a message; a consumer thread calls consume() to read it. wait() and notify() synchronise access so the consumer waits until data is available.',
      purpose:
        'Threads often need to coordinate — one produces data, another consumes it. wait()/notify() are the fundamental mechanisms for thread cooperation in Java.',
      howItWorks: [
        'Message has a content string and a boolean available flag.',
        'produce(msg) is synchronized: if available, wait() until consumed.',
        'Sets content, marks available=true, calls notify() to wake consumer.',
        'consume() is synchronized: if not available, wait() until produced.',
        'Reads content, marks available=false, calls notify() to wake producer.',
        'Producer and consumer threads are started; producer sends "Hello from Producer".',
      ],
      notes: [
        'wait() releases the lock and puts the thread in a waiting state.',
        'notify() wakes one waiting thread on the same object\'s lock.',
        'Both wait() and notify() must be called inside synchronized blocks.',
        'Always use wait() in a loop checking the condition (spurious wakeups).',
        'notifyAll() wakes all waiting threads when multiple are blocked.',
      ],
      run: 'javac Program5_InterThreadCommunication.java && java Program5_InterThreadCommunication',
      output: 'Produced: Hello from Producer\nConsumed: Hello from Producer',
    },
    {
      name: 'Program6_ThreadJoin.java',
      path: 'Lab_5/Program6_ThreadJoin.java',
      concept: 'Thread join()',
      description:
        'The main thread starts a Worker thread and calls join() to block until the worker completes. The main thread cannot continue until the worker finishes its 2-second task.',
      purpose:
        'join() coordinates thread completion — useful when one thread\'s output is needed before another can proceed. Common in parallel processing pipelines.',
      howItWorks: [
        'Worker extends Thread; run() prints start message, sleeps 2 seconds, prints finish.',
        'main() creates and starts the Worker thread.',
        'main() prints "Main thread waiting for worker...".',
        'worker.join() blocks main until Worker\'s run() completes.',
        'After join() returns, main prints "Main thread continues after worker completes".',
        'Total program runtime is at least 2 seconds due to the sleep.',
      ],
      notes: [
        'join() waits for the target thread to die (finish execution).',
        'join(millis) waits with a timeout.',
        'Calling join() on the current thread causes deadlock.',
        'Essential for ensuring background work completes before proceeding.',
      ],
      run: 'javac Program6_ThreadJoin.java && java Program6_ThreadJoin',
      output: 'Worker thread started\nMain thread waiting...\n(after 2s) Worker thread finished\nMain thread continues',
    },
    {
      name: 'Program7_MultipleThreads.java',
      path: 'Lab_5/Program7_MultipleThreads.java',
      concept: 'Multiple threads with sleep()',
      description:
        'Launches three Printer threads that each print a message three times with 500ms pauses. Demonstrates concurrent execution of multiple threads and the Thread.sleep() method for timing control.',
      purpose:
        'Real applications run many threads simultaneously. sleep() simulates work duration and makes concurrent execution visible by spacing out output.',
      howItWorks: [
        'Printer extends Thread; constructor stores a message label.',
        'run() loops 3 times: prints message + iteration number, then Thread.sleep(500).',
        'sleep() pauses the current thread for 500 milliseconds without blocking others.',
        'main() creates and starts three Printer threads: Thread-1, Thread-2, Thread-3.',
        'All three run concurrently — their output interleaves.',
        'InterruptedException is caught if the thread is interrupted during sleep.',
      ],
      notes: [
        'Thread.sleep(ms) pauses only the calling thread, not the entire program.',
        'sleep() is static — always pauses the current thread.',
        'InterruptedException must be handled or declared.',
        'Demonstrates that threads run in parallel, not sequentially.',
      ],
      run: 'javac Program7_MultipleThreads.java && java Program7_MultipleThreads',
      output: 'Interleaved Thread-1/2/3 messages, 3 iterations each with 500ms gaps',
    },
    {
      name: 'Program8_ProducerConsumer.java',
      path: 'Lab_5/Program8_ProducerConsumer.java',
      concept: 'Producer-Consumer pattern',
      description:
        'Classic producer-consumer design with a bounded buffer (capacity 5). A producer thread adds integers 1–5; a consumer thread removes them. wait()/notifyAll() handle the case when the buffer is full or empty.',
      purpose:
        'The producer-consumer pattern decouples data production from consumption. Bounded buffers prevent memory overflow and are used in thread pools, message queues, and I/O pipelines.',
      howItWorks: [
        'SharedQueue wraps a Queue<Integer> with capacity 5.',
        'produce(value): if queue is full, wait(); else add value and notifyAll().',
        'consume(): if queue is empty, wait(); else remove value and notifyAll().',
        'Producer thread adds 1 through 5 with 200ms sleep between each.',
        'Consumer thread removes values with 400ms sleep (slower than producer).',
        'When buffer fills, producer waits; when empty, consumer waits.',
      ],
      notes: [
        'Bounded buffer prevents unlimited memory growth.',
        'notifyAll() wakes all waiting threads (safer than notify() with multiple waiters).',
        'Producer-consumer is a fundamental concurrent design pattern.',
        'Java BlockingQueue (java.util.concurrent) provides this out of the box.',
        'Different sleep rates demonstrate buffer filling and draining.',
      ],
      run: 'javac Program8_ProducerConsumer.java && java Program8_ProducerConsumer',
      output: 'Produced: 1\nConsumed: 1\nProduced: 2\nConsumed: 2\n... (alternating)',
    },
  ],
};
