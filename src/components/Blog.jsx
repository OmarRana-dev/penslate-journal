import React from "react";

function Blog() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
      {/* Header Section */}
      <div className="p-6 border-b">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Headline for Blog Post
        </h1>
        <p className="text-gray-600 text-sm">
          This is a short introduction or description for the blog
          post to engage readers.
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center px-6 py-4 border-b">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/40"
            alt="userImage"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-semibold text-gray-700">
            Username
          </div>
          <div className="text-xs text-gray-500">
            Published on <span>12th Jan 2024</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full h-64 bg-gray-100">
        <img
          src="https://via.placeholder.com/400"
          alt="featured image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <p className="text-gray-800 text-base leading-relaxed">
          Titles aren’t everything. But it’s silly to think they’re
          meaningless. There’s a bit of an unhealthy obsession among
          software developers (me included) with getting to Senior
          level, but there is a good reason: On one end of the
          developer career spectrum is junior. They are expendable,
          plentiful and need lots of guidance. They are an important
          investment and also a bit of a gamble. On the other end of
          the spectrum is the senior. They can make or break your team
          through their influence on the codebase, team and processes.
          Their salary can be double that of the junior. They squish
          the really tough bugs. They’ve made costly mistakes and
          understand how to avoid them. Believe it or not, most of
          your career as a developer will be at the senior level. This
          is one title I do think you should chase. Unfortunately,
          you’re probably making one of the mistakes I made when I was
          struggling to get the coveted senior title. The foggy path
          to senior. Going from junior to mid-level developer is a
          small step for most developers. They go from bumbling
          around, barely understanding how to contribute as a
          professional developer to writing code that generally works.
          They learn how to use standard processes for getting their
          code from their machine out to the world. This usually takes
          1–2 years. The jump from mid-level to senior is much less
          clear. Different companies have different guidelines. There
          is no universal checklist. Some genius on LinkedIn told you
          that the senior developer title doesn’t matter anyways —
          just write code for the love of the sport. Great advice! Not
          like your title determines your pay, bonus or career
          trajectory. I swear, sometimes I wonder if these big brains
          have ever worked in a real company. Without a clear path,
          most developers fall into the coding trap: You double down
          on your current programming language to become an “expert”
          You add more tools to your tool belt like a new, more
          impressive programming language (Rust anyone?) You obsess
          over code quality and writing error free code You wonder why
          you haven’t been promoted yet Plot twist: I am you. I made
          all these mistakes and have since gone on to be a senior at
          multiple companies even though I’ve rarely been the best
          coder on any team. As an engineering manager, I had the
          privilege of promoting developers to senior and the awkward
          duty to share with developers why there were NOT getting
          promoted. Here’s how you can shorten your path to senior
          developer, step by step. Step 0: Don’t suck at coding Let’s
          get this out of the way before we dive into the less obvious
          stuff. You cannot simply be a like-able but terrible coder
          and expect to get promoted (but I have seen it happen). The
          best way to get better at coding is to: Write a lot of bad
          code Read good code and steal what makes sense (no, not by
          copy-pasting but “stealing” the patterns and styles of
          better coders) Read books on common design patterns in your
          programming language and apply them to your work Look up
          design patterns for the framework you use. For example, if
          you use ReactJS (cuz of course you do) then look up popular
          ways to compose components, fetch data and construct large
          apps. The sad reality is that many developers never make it
          past step 1. Don’t do that. You’re better than that. I turn
          career changers to software developers through 1 on 1
          mentorship and hands-on projects. I guess you could call it
          a bootcamp 🙄. Become 1 of the 60 students per year here
          Step 1: Stop thinking about yourself I run an online coding
          program, Parsity.io and I ask prospective mentees why they
          want to learn to code. I hear this answer a lot: “I really
          like to work alone. I want to write code to work from home
          and not deal with people” Who’s gonna tell him? Composing
          software is a team sport and managing all the different
          changes from multiple developers is a tough task. One strong
          signal of a healthy codebase is cohesion: Many authors using
          a similar style to write code. It flows. Conversely, a
          codebase that lacks patterns is a huge problem: Sure, it
          works but what happens when a developer wants to create a
          new feature? What pattern do they use and why? Imagine
          working in a codebase with no clear way of doing things.
          Each developer is basically re-inventing the wheel. As a
          junior developer you take care of a small portion of the
          codebase. You just want your code to work. At mid-level,
          your scope widens and you might even help juniors with their
          work. Your code not only works but you consider how it fits
          into the bigger picture. Seniors create the patterns that
          others use to write code and work faster. They see 3
          different versions of a function that does the same thing
          and consolidate it. They give a damn and realize that these
          small improvements can pay big dividends. If your codebase
          was a book, does it feel like it was written by the same
          person? Aim to get closer to this ideal state. Step 2: Run
          towards fires There is a universal expectation of senior
          developers: They squish tough bugs. I actually got my first
          promotion doing this. I even wrote about it here. When a
          critical incident happens on your team like an outage or a
          typo that your CEO found during a demo to his buddies on the
          golf course — I want you to raise your hand to investigate
          it. Don’t say “I’ll fix it.” “Investigate.” Update the team
          on your progress every hour using plain language and be
          honest. If you actually fix it, you’re a hero. If you need
          to reach out for more help, you still get the “halo effect”
          of being involved with the fix. Remember, this is a team
          sport. Step 3: Write less code and write more Writing code
          for a living is mostly just writing. Documentation Emails to
          that guy in marketing about why that animation on the
          landing page will take more than an hour (he’s gonna be so
          pissed) Creating tickets for new features with the necessary
          requirements Comments in your code explaining some business
          context to a snippet of code (ex: you convert dates to a
          weird format for users in a certain country) Pull request
          descriptions so your team mates know how to test a complex
          scenario As a senior developer you want to scale your
          knowledge. The single best way to do this is to write down
          what you know and share it with others. If you create a
          feature that uses some new technology then document it so
          others know how to work with it. Write articles like this so
          other developers can learn from your mistakes. Write
          not-so-cringy LinkedIn posts about things you find
          interesting. Write to organize your thoughts and create
          clarity from the jumbled mess in your noggin. Seriously.
          Learning how to write clearly and express technical concepts
          in an approachable way will do wonders for your career. Your
          organization is bigger than your team of nerds. Most
          developers simply don’t know how to break down tech into
          terms that normies can understand. Believe me, this is a
          super power and it’s not simple. The only way to get better
          is to start writing. Dump your draft email into Chat GPT and
          ask it how you can make things more concise. Read a book
          like “On Writing Well” by William Zinsser to learn how
          professional writers write good. I might need to re-read it
          myself. One last thing that you’re not going to like You can
          do all these things and absolutely not get promoted. If
          there is no budget for a pay increase then you could have
          squished the hairiest bugs, delivered the feature ahead of
          time and mentored the other juniors on your team and still
          not get that shiny title. Do these things anyways. Success
          will be inevitable. Timelines can be unpredictable. Also
          remember that “senior” will be the title you have for the
          longest amount of time in your career as a developer. For
          many software engineers, this is the last stop on the career
          ladder. There’s nothing wrong with that. So maybe don’t
          speed run towards senior. Jog instead. Break things, learn
          stuff and enjoy the ride. Chasing titles simply for the sake
          of it won’t make you any happier. At least it didn’t for me.
          At a certain point, I was chasing money and titles to fill
          some hole my insecurity had dug long ago. I thought more
          money and prestige could cover it up, but the pit never gets
          filled. Got deep there didn’t I? All I’m saying is that,
          yes, titles are important but they aren’t an indication of
          your worth as a person or as a professional developer. Now
          go get that title. I’m rooting for you.
        </p>
      </div>

      {/* Interaction Section */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex space-x-4 text-gray-500">
          <span className="hover:text-blue-500 cursor-pointer">
            👍
          </span>
          <span className="hover:text-red-500 cursor-pointer">
            ❤️
          </span>
          <span className="hover:text-gray-700 cursor-pointer">
            💬 Comment
          </span>
        </div>
        <div className="text-gray-500 hover:text-green-500 cursor-pointer">
          🔗 Share
        </div>
      </div>
    </div>
  );
}

export default Blog;
