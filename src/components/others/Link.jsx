import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-pink-600" : ""}
        transition duration-500 hover:text-slate-900 cursor-pointer`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
