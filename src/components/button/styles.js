const styles = `
  .button {
    /* CSS resets */
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    user-select: none;

    /* styling */
    margin: 0 10px;
    color: #444;
    font-size: 16px;
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid #ccc;
    text-align: left;
  }

  .button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  .button:hover {
    border: 1px solid #888;
  }

  .button--selected {
    background-color: #bbb;
  }

  .button svg {
    width: 15px;
    height: 25px;
    fill: #444;
    margin-right: 10px;
  }

  .button svg:last-child {
    margin: 0;
  }

  .button:disabled {
    color: #eee;
    border-color: #eee;
  }

  .button--selected:disabled {
    background-color: #eee;
    color: #bbb;
  }

  .button:disabled svg {
    fill: #eee;
  }

  .button--selected:disabled svg {
    fill: #bbb;
  }
`;

export default styles;
