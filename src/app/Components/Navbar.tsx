"use client";
import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import {
    LayoutGrid,
    Coffee,
    Code,
    Terminal,
    Brush,
    ChevronsRight,
    ChevronDown,
    Wrench,
    Ruler,
    Weight,
} from "lucide-react";

const SITE_NAME = "Company Name";

export default function Navbar() {
    const [collapse, setCollapse] = useState(false);
    const clickCollapse = () => {
        setCollapse((prev) => !prev);
    };
    return (
        <div id="stickynav" className="">
            <nav
                className={`${
                    !collapse ? "w-[250px]" : "w-[55px]"
                } self-start sticky top-0 h-screen bg-navcolor transition-all duration-300 rounded-r-xl`}
            >
                <div className="w-full flex items-center p-2 pl-4 text-2xl font-bold">
                    <Link
                        href="/"
                        className={`hover:cursor-pointer bg-gradient-to-r from-accents to-white bg-clip-text hover:text-transparent transition-all duration-700 text-nowrap`}
                    >
                        {!collapse && SITE_NAME}
                    </Link>
                    <div
                        className={`${
                            collapse ? "" : "ml-auto"
                        } hover:cursor-pointer`}
                    >
                        <ChevronsRight
                            size={32}
                            onClick={clickCollapse}
                            data-open={collapse.toString()}
                            className={`transition-all hover:text-accents ${
                                !collapse && "rotate-180"
                            }`}
                        />
                    </div>
                </div>
                <ol className="p-2 list-none font-bold hover:cursor-pointer">
                    <Linkhref
                        divLink="Dashboard"
                        SVG={LayoutGrid}
                        collapsed={collapse}
                    />
                    <Linkhref
                        divLink="Homebrew"
                        sublink={[
                            { divLink: "HTML", SVG: Code },
                            { divLink: "JavaScript", SVG: Terminal },
                            { divLink: "CSS", SVG: Brush },
                        ]}
                        SVG={Coffee}
                        collapsed={collapse}
                    />
                    <Linkhref
                        divLink="Utility"
                        sublink={[
                            { divLink: "Calculator", SVG: Code },
                            { divLink: "Ruler", SVG: Ruler },
                            { divLink: "Conversion", SVG: Weight },
                        ]}
                        SVG={Wrench}
                        collapsed={collapse}
                    />
                </ol>
            </nav>
        </div>
    );
}
type subLinkType = {
    divLink: string;
    SVG?: any;
};
type LinkType = {
    divLink: string;
    sublink?: subLinkType[];
    SVG?: any;
    collapsed: boolean;
};
function Linkhref({
    divLink,
    sublink,
    SVG,
    collapsed,
}: LinkType): React.ReactNode {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const clickHandler = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <>
            {sublink ? (
                <div className="group">
                    <div>
                        <div
                            onClick={clickHandler}
                            className="w-full flex justify-start gap-2 p-2 hover:text-accents hover:bg-[rgba(0,0,0,0.4)] rounded-lg list-none transition-all duration-150"
                        >
                            {SVG && !collapsed && <SVG />}
                            {!collapsed && divLink}

                            <ChevronDown
                                className={`${
                                    collapsed ? "" : "ml-auto"
                                } transition-all ${
                                    !isCollapsed && "rotate-180"
                                } ${!isCollapsed && "text-accents"}`}
                            />
                        </div>
                    </div>
                    <div
                        id="collapsible"
                        data-open={isCollapsed.toString()}
                        className={`grid transition-all duration-500`}
                    >
                        <div className="overflow-hidden">
                            {sublink.map(({ divLink, SVG }, index) => (
                                <Link
                                    href={divLink}
                                    key={index}
                                    className="w-full flex justify-start gap-2 p-2 hover:text-accents hover:bg-[rgba(0,0,0,0.4)] rounded-lg list-none transition-all duration-150"
                                >
                                    {SVG && <SVG />}
                                    {!collapsed && divLink}
                                    {/* {!collapsed && (
                                        <Link href={divLink}>{divLink}</Link>
                                    )} */}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <Link
                    href={divLink}
                    className="w-full flex justify-start gap-2 p-2 hover:text-accents hover:bg-[rgba(0,0,0,0.4)] rounded-lg list-none transition-all duration-150"
                >
                    {SVG && <SVG />}
                    {!collapsed && divLink}
                </Link>
            )}
        </>
    );
}
