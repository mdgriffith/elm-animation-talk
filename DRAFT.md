

# Rich Animation

{ Plantary Gear Graphic }

## in Elm

### Using the elm style animation library.


---- Thinking about Animation
How do we think about animation?

(or rather, how do we talk about it)

OK, I got this _thing_.  I need it to
  * fade in
  * then tell me its done fading in
  * then begin rotating until further notice.

-- So, we have a list of commands we want it to perform, why not just represent it as a list?
---->
    [ Animation.to [ opacity 1 ]
    , Animation.send DoneFadingIn
    , Animation.loop [ rotate 360 ]
    ]

-- Now, we only need one more piece of information here.  
-- When we send out this animation...do we want it to interrupt any current animations or start after any current animations have stopped...
---->
Animation.interrupt
    [ Animation.to [ opacity 1 ]
    , Animation.send DoneFadingIn
    , Animation.loop [ rotate (deg 360) ]
    ]

-- I mean, that's sorta it.  That's what you write.  There are a few more details to take care of.  But this is basically the interface.
-- Well, here's the entire interface for creating an animation:

Animation.interrupt -- Animation.interrupt or Animation.queue
    [ Animation.to [ opacity 1 ] -- Animation.to
    , Animation.send DoneFadingIn -- Animation.send, Animation.set
    , Animation.loop [ rotate (deg 360) ] --Animation.loop, Animation.repeat
    ]


-- Things are fast

 * Animation is updated along the browser's AnimationFrame call.  If no animation is occuring, no update is called.




----- Interpolation

Of course, when animating, you want to specify _how_ to get from a to b.  

    * Duration/Easing - Specify exactly where you want the position to be at any given moment

    * Springs - Model the motion after a spring.  
            Define how stiff the spring is, and how much damping will occur, and let the duration be calculated via physics.


elm-style-animation picks some defaults for you that you can override.  

(springs tend to be much easier to work with)


------ Staggering

Every animation library I looked at in preparation for this talk has special machinery for dealing with Stagged Animation.

(ReactMotion, VelocityJS)

In elm you can just use `List.indexedMap` and everything works out as it should.

```elm
List.indexedMap 
    (\i style ->
        Animation.interrupt
            [ Animation.wait (i * 0.1 * second)
            , Animation.to [ opacity 1 ]
            , Animation.send DoneFadingIn
            , Animation.loop [ rotate (deg 360) ]
            ] style
    ) model.styles
    
```

So we wait a little longer depending on the index of the item we're animating.


------- Animating Cool Stuff!

---> Blur + darken the background.
CSS filters...blur and darken?


# Automatically transition through polygons.
Animation.interrupt
    [ Animation.to [ opacity 1 ]
    , Animation.to [ opacity 1 ]
    , Animation.to [ opacity 1 ]
    ]

(doesn't matter how many points they have)


# Shadows!
-- Show many boxes that lift up and move depending on the cursor.
( little piece of code )

#  Text Shadows!
-- Words appear on boxes, the boxes set down, but the text is still 'hovering'
( little piece of code )


















-- There's this challenge that shows up, and I think it shows up quite a bit in animation, of making up all kinds of words, and having to learn and teach what they all mean.
If you're not careful, when you learn animation, you'll have to learn all these things:
    ReactCSSTransitionGroup, TransitionMotion, transitionEnterTimeout, willLeave, 

There's a lot of complicated machinery out there.  I don't believe it has to be.  
An Animation is a list of things you want done sequentially.



In Elm we can write animations like we talk about them.

I want to thank Brian Hicks and everyone organizing this conference.  Seriously, this is so cool.

This presentation was written entirely in elm, you can find the code at github.com/mdgriffith/elm-rich-animation-talk

And I want to thank Evan Czaplicki for helping me bring the elm-style-animation library to the next level.




