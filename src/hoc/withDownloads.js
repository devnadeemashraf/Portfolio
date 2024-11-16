const withDownloads = (Component, hocProps) => {
  const { link = null, downloadedFileName = null } = hocProps;

  const handleDownload = (e, ...rest) => {
    if (link !== null) {
      e.preventDefault();

      const anchor = document.createElement("a");
      anchor.href = link;

      if (downloadedFileName !== null) {
        anchor.download = downloadedFileName;
      }

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }

    // Call the original onClick handler if it exists
    if (typeof rest[0] === "function") {
      rest[0](e);
    }
  };

  return (props) => <Component {...props} onClick={handleDownload} />;
};

export default withDownloads;
