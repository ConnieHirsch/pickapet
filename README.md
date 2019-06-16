# Pickapet -- Pet Adoption App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## About This Project

Using Angular to create a full-stack web app, both to work through the ground-up steps of creating an Angular project on my own, and to demonstrate my mastery of the platform, using mobile-first design with some of the nicer [Bootstrap-adapted-for-Angular](https://ng-bootstrap.github.io/#/home) functions.  It is a true single page application, using Angular's routing functions to load your screens with a minimum of server-side interactions.

The basic idea is to provide a showcase website for animals seeking adoption (yeah, like Tindr but for adorable animals) that a staff person would curate -- there is a full set of adoptee and shelter forms that interact with a Firebase back end.  Currently, the four entries in the app are hard-coded in the app as a 'starter set' to guard against accidental deletion.

## Splash Screen

This is the entry screen you get, with a carousel that gives you basic adoptee information -- a picture, a name, where they are available, and depending on the size of your screen, the start of the entry description.  To find out more, you click on the Learn More button.

This is a carousel feature powered by Angular.

## Adoptees

Here you see the featured pet that you have clicked on, or the complete list of pets available, with the ability to read in full any description, plus basic facts about them -- breed, age and so on.  The entries could be easily made more elaborate with additional fields.

If you have an Admin role, you will be able to create, edit or delete pet entries, including being able to draw information from the Shelter listing.

## Adoptees 'Launch your next step!" button

This launches a modal screen (Bootstrap via Angular) that asks if you really want to investigate the adoptable pet further, and in a *working* version of the app would take you to the actual shelter entry of the pet you've chosen to further pursue adoption.

Since this is just a *demo*, all the links I've supplied go to a *demo* page on my own website, so you get the idea without bothering anyone out in the real world of pet adoption.

## Shelters

As with the Adoptee page, it is just a listing of shelter entries, and also only the administrator will be able to create, update and delete entries -- ideally it would be shelters that have agreed to have adoptable pets featured in this app, or perhaps each shelter would curate its own entries.


## About

Currently full of *loren ipsum* verbiage... but every website needs to have an About/Contact!  Pretend for now it's explaining how the pets are carefully curated, hand-selected from the freshest boutique shelters and rescue groups, et cetera.

## Manage

If you really want to explore this (and if you've read this far, you may as well) the ID and password are **test@test.com** and **password**.  (I just wanted to make it easy for testing -- the data this accesses is junk data for testing only.)  You can then **Fetch Data**, edit the fetched data on the relevant pages (note that editing function buttons are now available both for Adoptees and Shelters), **Save Data** and then **Logout**


