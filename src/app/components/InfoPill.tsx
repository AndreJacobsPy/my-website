import { type FunctionComponent } from 'react';

export interface InfoPillProps {
  title: string;
  description: string;
  duration?: string;
  tags?: string[];
}

const InfoPill: FunctionComponent<InfoPillProps> = ({ title, description, duration }) => {
  return (
    <div className="dark:bg-neutral-800 bg-neutral-200 p-4 m-4 rounded-md shadow-md">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <h4>{duration}</h4>
      </div>
      <p className="my-2 text-gray-500">{description}</p>
    </div>
  );
};

export default InfoPill;
