import React from 'react';

export default () => {
  return (
    <div className="col-4 mx-auto">
      <table>
        <tr>
          <td colspan="4">
            <div id="result"></div>
          </td>
        </tr>
        <tr>
          <td><button>1</button></td>
          <td><button>2</button></td>
          <td><button>3</button></td>
          <td><button>+</button></td>
        </tr>
        <tr>
          <td><button>4</button></td>
          <td><button>5</button></td>
          <td><button>6</button></td>
          <td><button>-</button></td>
        </tr>
        <tr>
          <td><button>7</button></td>
          <td><button>8</button></td>
          <td><button>9</button></td>
          <td><button>&times;</button></td>
        </tr>
        <tr>
          <td><button>.</button></td>
          <td><button>0</button></td>
          <td><button>=</button></td>
          <td><button>&#247;</button></td>
        </tr>
      </table>
    </div>
  );
};
