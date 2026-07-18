const Footer = () => {
  return (
    <footer className="w-full h-fit flex items-center justify-center py-2">
      <div className="bg-gray-100 dark:bg-gray-900 w-95/100 max-w-6xl rounded-xl flex items-center justify-center gap-4 p-2 mx-auto">
        <div className="dark:text-gray-400 text-gray-600 text-sm text-right">
          <p>
            @Crafted by <br />
            Source code
          </p>
        </div>
        <div className="text-left text-sm font-medium dark:text-blue-400 text-blue-500">
          <p>
            Abhishek
            <br />
            <a href="https://github.com/mahato-abhishek/brishti">
              <u>Github</u>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
