import React, { PropTypes, Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class ExcelTable extends Component {
  render() {
    const data = this.props.data;
    const allRows = Object.keys(data).map(key => data[key]);
    const headings = allRows[0];
    const rows = allRows.slice(1);
    return (
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            {headings.map(heading => (
              <TableHeaderColumn key={heading}>{heading}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {rows.map(row => (
            <TableRow key={row}>
              {row.map(value => (
                <TableRowColumn key={value}>{value}</TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

ExcelTable.propTypes = {
  data: PropTypes.object
};

ExcelTable.defaultProps = {
  data: {}
};

export default ExcelTable;
