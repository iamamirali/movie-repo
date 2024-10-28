import { IconType } from "react-icons";

type TProps = {
  Icon: IconType;
};

export const IconButton = (props: TProps): JSX.Element => {
  const { Icon } = props;

  return (
    <button>
      <Icon className="text-2xl" />
    </button>
  );
};
