## Getting Started

-   In your layout, make sure the Navbar component exists above the children components.

-   Inside your className, make sure the following properties exist:
    `h-screen w-screen gap-2 antialiased grid grid-cols-[auto_1fr]`
    This will ensure that the columns are set properly, such that the Navbar will stay on the left side of the user's screen while accomodating for the screen height and width.

## Color Customization

-   To change the background color as well as accents, go to the tailwind config file. Change the values of `accents` as well as `navcolor` to any CSS color value you choose. You can also grab variable you defined in your css root file as such:

```
navcolor: "var(--globalVariable1)",
accents: "var(--globalVariable2)",
```
