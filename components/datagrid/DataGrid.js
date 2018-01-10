import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Cell from './Cell';
import HeaderCell from './HeaderCell';
import isComponentOfType from '../utils/is-component-of-type';
import FooterRow from './FooterRow';
import HeaderRow from './HeaderRow';
import BodyRow from './BodyRow';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

class DataGrid extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    comparableId: PropTypes.any,
    selectable: PropTypes.bool,
  };

  constructor() {
    super(...arguments);

    this.handleRowSelectionChange = ::this.handleRowSelectionChange;
    this.handleHeaderRowSelectionChange = ::this.handleHeaderRowSelectionChange;

    this.state = {
      selectedRows: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comparableId !== this.props.comparableId) {
      this.setState({
        selectedRows: [],
      });
    }
  }

  handleHeaderRowSelectionChange(value) {
    const allBodyRowIndexes = React.Children.map(this.props.children, child => {
      if (isComponentOfType(BodyRow, child)) {
        return child.key;
      }
    });

    this.setState({
      selectedRows: value ? allBodyRowIndexes : [],
    });
  }

  handleRowSelectionChange(rowIndex) {
    this.setState(prevState => {
      const selectedRows = prevState.selectedRows.includes(rowIndex)
        ? prevState.selectedRows.filter(row => row !== rowIndex)
        : [...prevState.selectedRows, rowIndex];

      return {
        ...prevState,
        selectedRows,
      };
    });
  }

  render() {
    const { children, className, selectable, ...others } = this.props;
    const { selectedRows } = this.state;

    const classNames = cx(theme['data-grid'], className);
    const rest = omit(others, ['comparableId']);

    return (
      <Box data-teamleader-ui="data-grid" className={classNames} {...rest}>
        {React.Children.map(children, child => {
          if (isComponentOfType(HeaderRow, child)) {
            return React.cloneElement(child, {
              onSelectionChange: event => this.handleHeaderRowSelectionChange(event),
              selected: selectedRows.length === children[1].length,
              selectable,
            });
          }

          if (isComponentOfType(BodyRow, child)) {
            return React.cloneElement(child, {
              onSelectionChange: event => this.handleRowSelectionChange(child.key),
              selected: selectedRows.indexOf(child.key) !== -1,
              selectable,
            });
          }

          if (isComponentOfType(FooterRow, child)) {
            return React.cloneElement(child, {
              preserveSelectableSpace: selectable,
            });
          }

          return child;
        })}
      </Box>
    );
  }
}

DataGrid.HeaderRow = HeaderRow;
DataGrid.HeaderCell = HeaderCell;
DataGrid.BodyRow = BodyRow;
DataGrid.Cell = Cell;
DataGrid.FooterRow = FooterRow;

export default DataGrid;
