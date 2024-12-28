import { FC } from "react";
import s from "./LoadMore.module.css";
import PropTypes from "prop-types";

interface LoadMoreProps {
  onLoadMore: () => void;
}

const LoadMore: FC<LoadMoreProps> = ({ onLoadMore }) => {
  return (
    <div>
      <button onClick={onLoadMore} className={s.button}>
        Load more
      </button>
    </div>
  );
};

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMore;
