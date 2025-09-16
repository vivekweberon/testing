import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import parse from "html-react-parser";

const FormHeader = ({ displayFormHeader, formHeader, cssClassName }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/components/FormHeader.css" onError={(e) => logResourceLoadError(e.target)} />
      </Head>
      {displayFormHeader && <div className={`${cssClassName} formHeader`}>{parse(formHeader)}</div>}
    </>
  );
};

export default FormHeader;

FormHeader.propTypes = {
  formHeader: PropTypes.string,
};
