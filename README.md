# What is Polymorphisim?

**Polymorphisim** sounds like a big and complicated word, but it's not so complicated.  These are a joining of two Greek words, "*Poly*" meaning "**many**" and "*Morph*" meaning "**form**".  So, the word *Polymorphisim* really means "**many forms**".

In programming, polymorphisim allows *objects* (things) to take on many forms.  This means that different *objects* respond to the same command in their own unique way.

## Why Does Polimorphisim Matter?

Polymorphisim matters as it makes programming more flexible and easier to manage.  It allows you to write code that works with different kinds of objects without knowing exactly what those objects actually are, which saves time and makes code easier to understand and use.

## Polymorphisim Key Concepts

 1. **Method Overloading**:  This happens when a *class* has multiple *methods* (functions) with the same name but different *parameters*.  Take for example a *draw* method which can be used to *draw* a circle if you provide it a **radius**, or a square if you provide it a with a **side length**. 
 2. **Method Overriding**:  This occurs when a *subclass* (a special version of a class) changes or *overrides* a method from its parent class.  Take for example a general *Animal* class that contains a *speak* method.  A *Dog* class could override that method to make the dog *bark* instead of just making a generic animal sound.
 3. **Interface/Abstract Classes**:  These are special classes that define methods but don't actually do anything by themselves.  However, other classes can use these methods in their own way.  This ensures that all these classes can respond to the same commands, even if they do it differently.
 4. **Dynamic Method Dispatch**: Runtime decision of which method to call.

## A Real-World Anology

***Have you ever had the problem of losing a T.V. remote control or having too many remote controls for different devices?***  

One way of dealing with either of these issues is to purchase a *Universal Remote Control*.  With this type of remote control it can work with many different devices like your *T.V., DVD player, and Surround Sound System*.

The *buttons* on the remote control are always the same such as *power on/off, volume control, and channel numbers*.  However, the magic happens when you press the *power on/off* button and it knows whether to turn on or off the T.V., start the DVD player, or turn on the Surround Sound System.

### In This Analogy

- The *remote control* is similar to the *command* in a program.
- The devices *T.V., DVD Player, Surround Sound System* are similar to the *objects*.
- Each device responds to the same *command* (power on/off) button in its own way, just like different *objects* respond to the same *function* in their own way.

 This is *polymorphisim* in action!  The remote control doesn't need to know all the details about each device.  It simply sends the command, and the device does what it needs to do in response.

## References

- Sloth Bytes. (2024). 🦥 OOP Pillar #4: Polymorphism For Dummies. [online] Available at: [Sloth Bytes](https://slothbytes.beehiiv.com/p/polymorphism) [Accessed 26 Aug. 2024].
- MDN Web Docs. (2019). Classes. [online] Available at: [MDN Web Docs. - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
- developer.mozilla.org. (2023). extends - JavaScript | MDN. [online] Available at: [MDN Web Docs. - Classes > extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends).
- careerfoundry.com. (2022). A Beginner’s Guide to JavaScript Classes (2023). [online] Available at: [Career Foundary](https://careerfoundry.com/en/blog/web-development/javascript-classes/).