const PdfViewer = (props: { className?: string; src: string }) => {
  return (
    <div className={props.className}>
      <iframe src={props.src} width="100%" height="100%" title="PDF Viewer" />
      <p className="sr-only">Your browser does not support iframes.</p>
    </div>
  );
};

export default PdfViewer;
