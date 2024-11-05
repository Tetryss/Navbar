# Getting Started

-   In your layout, make sure the Navbar component exists above the children components.

-   Inside your className, make sure the following properties exist:
    `h-screen w-screen gap-2 grid grid-cols-[auto_1fr]`
    This will ensure that the columns are set properly, such that the Navbar will stay on the left side of the user's screen while accomodating for the screen height and width.

# Adding Links and Sublinks

-   Adding Links is very simple with the custom Linkhref component built directly inside Navbar.tsx.
-   To add a new link, navigate to the section that says "Links go down" in the tsx file. From there, you will see some built in links. The basic format is as follows:

```
<Linkhref
    divLink="Dashboard"
    SVG={LayoutGrid}
    collapsed={collapse}
/>
```

-   As you can see there are three props: divLink, SVG, and collapsed.

-   `divLink` is the actual link to the path as well as the name that gets set in the navigation bar. Be mindful of adding spaces, as the path you create will need to accomodate for that as well.
-   `SVG` as its name suggests, this is the SVG icon that will show up next to the link. To add a new icon, go to this site: `https://lucide.dev/icons/`. Once you find one you want, simply go to the top of the tsx file and import it along with the existing ones. From there, just simply pass that icon as a prop.
-   `collapsed` This is a property that keeps track of whether or not the navbar is opened to close. You can simply ignore this.

## Sublinks

```
<Linkhref
    divLink="Utility"
    sublink={[
        { divLink: "Calculator",    Code },
        { divLink: "Ruler", SVG: Ruler },
        { divLink: "Conversion",    Weight },
    ]}
    SVG={Wrench}
    collapsed={collapse}
/>
```

-   When adding a sublink, the process is mostly the same as the adding a regular link, only now, there is an extra parameter.
-   `divLink` In this case, this simply acts as the name of the collapsible menu.
-   `sublink` This is where things get a little more involved. Sublink specifically takes an array of objects. The object follows the same interface/typing as the regular link, only that you don't need to pass the collapsed property. Please refer to the example above.

# Color Customization

-   To change the background color as well as accents, go to the tailwind config file. Change the values of `accents` as well as `navcolor` to any CSS color value you choose. You can also grab variable you defined in your css root file as such:

```
navcolor: "var(--globalVariable1)",
accents: "var(--globalVariable2)",
```

# Existing and future features

-   [x] Basic navigation
-   [x] Links and Sublinks
-   [x] Collapsible
-   [x] Simple customization
-   [ ] Mobile support
-   [ ] Footer/Credits section
