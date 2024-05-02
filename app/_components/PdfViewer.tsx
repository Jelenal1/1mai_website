const PdfViewer = (props: { className?: string; src: string }) => {
  return (
    <div className={props.className}>
      <iframe src={props.src} width="100%" height="100%">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default PdfViewer;
