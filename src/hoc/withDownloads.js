const withDownloads = (Component, hocProps) => {
  const { file = "", fileName = "" } = hocProps;

  const handleDownload = (e, ...rest) => {
    if (file !== "") {
      // Prevent default action if downloading
      e.preventDefault();

      // Create a temporary link element to trigger download
      const link = document.createElement("a");
      link.href = file;
      link.download = fileName; // Set download filename
      document.body.appendChild(link);
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up the DOM
    }

    // Call the original onClick handler if it exists
    if (typeof rest[0] === "function") {
      rest[0](e);
    }
  };

  return (props) => <Component {...props} onClick={handleDownload} />;
};

export default withDownloads;
