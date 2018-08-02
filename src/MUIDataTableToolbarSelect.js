import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import IconButton from "material-ui/IconButton";
import BookmarkBorderIcon from "material-ui-icons/BookmarkBorder";
import Tooltip from "material-ui/Tooltip";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

const defaultToolbarSelectStyles = {
  root: {
    backgroundColor: "#f7f7f7",
    flex: "1 1 100%",
    display: "flex",
    height: "64px",
    justifyContent: "space-between",
  },
  title: {
    paddingLeft: "26px",
    top: "50%",
    position: "relative",
    transform: "translateY(-50%)",
  },
  iconButton: {
    marginRight: "24px",
    top: "50%",
    display: "block",
    position: "relative",
    transform: "translateY(-50%)",
  },
  deleteIcon: {
    color: "#000",
  },
};

class MUIDataTableToolbarSelect extends React.Component {
  static propTypes = {
    /** Options used to describe table */
    options: PropTypes.object.isRequired,
    /** Current row selected or not */
    rowSelected: PropTypes.bool,
    /** Callback to trigger selected rows select */
    onRowsSelect: PropTypes.func,
    /** Extend the style applied to components */
    classes: PropTypes.object,
  };

  render() {
    const { classes, onRowsSelect, selectedRows } = this.props;

    return (
      <Paper className={classes.root}>
        <div>
          <Typography variant="subheading" className={classes.title}>
            {selectedRows.length} row(s) selected
          </Typography>
        </div>
        <Tooltip title="Copy to clipboard">
          <IconButton className={classes.iconButton} onClick={onRowsSelect} aria-label="Copy Selected Rows">
            <BookmarkBorderIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
      </Paper>
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, { name: "MUIDataTableToolbarSelect" })(MUIDataTableToolbarSelect);
