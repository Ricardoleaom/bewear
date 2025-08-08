const Footer = () => {
  return (
    <footer className="bg-accent w-full gap-1">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} P13 Certificadora. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
