"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import { usePathname } from "next/navigation";
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
    Wifi,
} from "lucide-react";

const SITE_NAME = "Company Name";

export default function Navbar() {
    const [collapse, setCollapse] = useState(false);
    const clickCollapse = () => {
        setCollapse((prev) => {
            localStorage.setItem("collapsed", (!prev).toString());
            return !prev;
        });
    };
    useEffect(() => {
        const item = localStorage.getItem("collapsed");
        if (item) {
            setCollapse(JSON.parse(item));
        }
    }, []);
    return (
        <div id="stickynav" className="">
            <nav
                className={`${
                    !collapse ? "w-[250px]" : "w-[55px]"
                } self-start sticky top-0 h-screen bg-navcolor transition-all duration-300 rounded-r-xl overflow-y-scroll no-scrollbar`}
            >
                <div className="w-full flex items-center p-2 pl-4 text-2xl font-bold">
                    <Link
                        shallow={true}
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
                    {/* LINKS GO DOWN */}
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
                    <Linkhref
                        divLink="Connectivity"
                        SVG={Wifi}
                        collapsed={collapse}
                    />
                    {/* LINKS GO UP */}
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
    const pathname = usePathname();

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
                            className={`w-full flex justify-start gap-2 p-2 hover:text-accents hover:bg-[rgba(0,0,0,0.4)] rounded-lg list-none transition-all duration-150`}
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
                                    shallow={true}
                                    href={divLink}
                                    key={index}
                                    className={`w-full flex justify-start gap-2 p-2 hover:text-accents hover:bg-[rgba(0,0,0,0.4)] rounded-lg list-none transition-all duration-150 ${
                                        pathname === "/" + divLink &&
                                        "text-accents"
                                    }`}
                                >
                                    {SVG && <SVG />}
                                    {!collapsed && divLink}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <Link
                    shallow={true}
                    href={divLink}
                    className={`w-full flex justify-start gap-2 p-2 hover:text-accents hover:bg-[rgba(0,0,0,0.4)] rounded-lg list-none transition-all duration-150 ${
                        pathname === "/" + divLink && "text-accents"
                    }`}
                >
                    {SVG && <SVG />}
                    {!collapsed && divLink}
                </Link>
            )}
        </>
    );
}
