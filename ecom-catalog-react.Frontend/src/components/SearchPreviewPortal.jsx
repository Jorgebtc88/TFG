import ReactDOM from 'react-dom';

const SearchPreviewPortal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.body
  );
};

export default SearchPreviewPortal; 