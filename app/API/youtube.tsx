interface Props {
  className?: string;
}

export const Youtube: React.FC<Props> = ({ className }) => {
  return (
      <div className={className}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk?si=u5upGNfcxw933QAA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
  );
};