import React from 'react';
import { Table } from 'react-bootstrap';

const Treds = require('../../api/documents/treds.json');

const inheritanceFullNames = {
  AD: 'Autosomal dominant',
  AR: 'Autosomal recessive',
  XLD: 'X-linked dominant',
  XLR: 'X-linked recessive',
};

const TredTable = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },

  render() {
    const name = this.props.name;

    if (!name) {
      return null;
    }

    const tred = Treds[name];

    return (
      <Table striped condensed hover>
        <tbody>
          <tr>
            <td>Gene</td>
            <td>
              <a href={ `https://www.genecards.org/cgi-bin/carddisp.pl?gene=${tred.gene_name}` }
                title={ tred.gene_name }
                target='_blank'
              >
                { tred.gene_name }
              </a> ({ tred.gene_location })
            </td>
          </tr>
          <tr>
            <td>Inheritance</td>
            <td>{ inheritanceFullNames[tred.inheritance] }</td>
          </tr>
          <tr>
            <td>Sequence</td>
            <td>
              { tred.prefix }
              <div style={{ color: 'red' }}>
                <strong>({ tred.repeat })x</strong>
              </div>
              { tred.suffix }
            </td>
          </tr>
          <tr>
            <td>Symptom</td>
            <td>
              <div className="text-left">
                { tred.symptom }
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  },
});

module.exports = TredTable;