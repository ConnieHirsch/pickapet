# Pickapet: Pet Adoption App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.5.2.

## About This Project

My aim was to use Angular to create a full-stack web app, to work through the ground-up steps of creating an Angular project on my own, and to demonstrate my mastery of the platform, using mobile-first design with some of the nicer [Bootstrap-adapted-for-Angular](https://ng-bootstrap.github.io/#/home) functions.  It is a true single page application, using Angular's routing functions to load your screens with a minimum of server-side interaction.

The basic concept is to provide a showcase website for animals seeking adoption (yeah, like Tindr but for adorable animals) that a staff person would curate -- there is a full set of adoptee and shelter forms that interact with a Firebase back end.  Currently, the four entries in the app are hard-coded in the app as a 'starter set' to guard against accidental deletion.

## The Parts Of The Project

### Splash Screen / Main Tab

The entry screen for this app, featuring a carousel that gives you basic adoptee information -- a picture, a name, where they are available, and depending on the size of your screen, the start of the entry description.  To find out more, you click on the *Learn More* button.

The carousel feature is powered by Angular.  Behind the scenes on the browser side, the data for the carousel is a JSON object shared between Angular modules.

### Header

Collapses to a standard Hamburger icon for smaller screens.  Note the dropdown functionality for the *Manage* function.  Code uses Angular's *router.navigate()* functionality to switch screens with low overhead.

### Adoptees Tab

Here you see the featured pet that you have clicked on, or the complete list of pets available, with the ability to read in full any description, plus basic facts about them -- breed, age and so on.  The entries could be easily made more elaborate with additional fields.

If you have an Admin role, you will be able to create, edit or delete pet entries, including being able to draw shelter name and URL from the Shelter listing, so you can only add entries from existing (permitted) shelters.

### Adoptees Detail 'Launch your next step!" button

This launches a modal screen (Bootstrap via Angular) that asks if you really want to investigate the adoptable pet further, and in a *working* version of the app would take you to the actual shelter entry of the pet you've chosen to further pursue adoption.

Since this is just a *demo*, all the links I've supplied go to a *demo* page on my own website, so you get the idea without bothering anyone out in the real world of pet adoption.

### Shelters

As with the Adoptee page, it is just a listing of shelter entries, and also only the administrator will be able to create, update and delete entries -- ideally it would be shelters that have agreed to have adoptable pets featured in this app, or perhaps each shelter would curate its own entries.


### About

Every website needs to have an About/Contact!  Pretend for now it's explaining how the pets are carefully curated, hand-selected from the freshest boutique shelters and rescue groups, et cetera -- meanwhile, I'm repeating the markdown explanation about this site, which seems to be a useful thing to do.

### Scroll To Top Button

For long pages (especially small screens) it seemed necessary to have a To Top button appear when the user is far enough down the page to need it.  I was able to adapt a lovely example 'Scroll to top Button for Angular' (https://medium.com/@appl4e/scroll-to-top-button-for-angular-99ddeebb8c3a) by Apple Mahmood.

### Manage

If you really want to explore this (and if you've read this far, you may as well) the ID and password are **test@test.com** and **password**.  (I just wanted to make it easy for testing -- the data this accesses is junk data for testing only.)  You can then **Fetch Data**, edit the fetched data on the relevant pages (note that editing function buttons are now available both for Adoptees and Shelters), **Save Data** and then **Logout**.

Firebase is the current backend database, since I had recent experience using it, but any database such as MySQL or MongoDB would be easily linked instead.  But since, this is a demo, it was nice to get some practice in with Firebase.

### Footer

It's a footer, but I got to link in some of the Font Awesome glyphs and make them play nicely with the Angular code.

## What I Learned With This Project

I got to take an Angular project from the first setup command to creating modules, to sharing services between those modules, routing, CRUD interactions, CSS styling that overrides Angular's base CSS, put in screen size reactivity, and produced an app that runs mobile-first but expands gracefully for the bigger screens.  And while occasionally I got frustrated with a detail or two, I was able to figure out where I'd gone wrong and largely enjoy making it.

