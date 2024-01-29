import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

function MetaComponent({ meta }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Helmet>
    </HelmetProvider>
  );
}

// Prop type validation
MetaComponent.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};

export default MetaComponent;
