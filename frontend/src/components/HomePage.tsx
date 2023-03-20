import { FrontPage } from './Pages/FrontPage';

interface Props {
  svgUrl: string;
}

const SvgBackgroundImage: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="h-screen bg-indigo-600">
        <FrontPage />
      </div>
    </>
  );
};

export default SvgBackgroundImage;
