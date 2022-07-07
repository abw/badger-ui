import React  from 'react'
import Icon from '../Icon'
import { addDebug, isDefined, classNames, debounce, Themed } from '../../utils'

const inactiveState = {
  searching: false,
  search:    undefined,
  results:   undefined,
  result:    undefined,
  cursor:    undefined,
};

class Search extends React.Component {
    static defaultProps = {
        minLength:     2,
        debounceTime:  500,
        placeholder:   'Search',
        debug:         false,
        debugLabel:    'Search',
        debugColor:    'MediumVioletRed',
        loadingIcon:   'cog',
        clearIcon:     'times',
        searchIcon:    'search'
    };
    constructor(props) {
        super(props);
        const value = this.props.value;
        const input = isDefined(value)
          ? (this.props.displayValue ? this.props.displayValue(value) : value.text)
          : '';
        this.state = {
            value,
            input,
            ...inactiveState
        };

        // add this.debug()
        addDebug(this, props.debug, props.debugLabel, props.debugColor);

        // bind handlers to this so they can be called as functions
        this.focus    = this.focus.bind(this);
        this.blur     = this.blur.bind(this);
        this.change   = this.change.bind(this);
        this.clear    = this.clear.bind(this);
        this.keypress = this.keypress.bind(this);
        this.cursor   = this.cursor.bind(this);
        this.select   = this.select.bind(this);

        // startSearch should debounce if debounceTime is set, otherwise call direct
        this.search = props.debounceTime
          ? debounce(this.search.bind(this), props.debounceTime)
          : this.search.bind(this);

        this.debug('initial value:%o  input:%s', value, input);
    }
    componentDidMount() {
      // track when component is mounted to avoid "Can't perform a React state
      // update on an unmounted component." warnings
      this.mounted = true;
    }
    componentWillUnmount() {
      this.setState({ results: null });
      this.mounted = false;
    }
    focus() {
        this.debug('focus()');
        this.setState({ focussed: true });
        if (this.props.onFocus) {
            this.props.onFocus();
        }
    }
    blur() {
        this.debug('blur()');
        this.setState({ focussed: false });
        if (this.props.onBlur) {
            this.props.onBlur();
        }
        // Nasty hack to hide result shortly after blur.  If we clear the results
        // immediately, or only display the results when the component is focussed
        // then the results disappear before an onClick has time to register.
        setTimeout(
          () => this.clearResults(),
          500
        );
    }
    clearResults() {
        if (this.mounted) {
            this.setState({ results: null });
        }
    }
    change(event) {
        const input = event.target.value;
        this.debug('change() input:', input);
        if (input.length >= this.props.minLength) {
            this.setState(
              { input },
              this.search
            );
        }
        else {
            this.setState({
                input,
                ...inactiveState
            });
        }
    }
    clear() {
        this.debug('clear()');
        this.setState({
            input: '',
            ...inactiveState
        });
        if (this.props.onClear) {
            this.debug('calling this.props.onClear()');
            this.props.onClear();
        }
    }
    reset() {
        this.debug('reset()');
        const {value, displayValue} = this.props;
        const input = isDefined(value)
          ? (displayValue ? displayValue(value) : value.text)
          : '';
        this.debug('reset() => [value:%o] [input:%s]', value, input);
        this.setState({
            value,
            input,
            ...inactiveState
        });
    }
    keypress(event) {
        this.debug('keypress: ', event.key);
        const {results, cursor} = this.state;

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                if (results && results.length) {
                    this.setState({
                        cursor: (cursor + 1) % results.length
                    });
                }
                break;

            case 'ArrowUp':
                event.preventDefault();
                if (results && results.length) {
                    this.setState({
                        cursor: (cursor + results.length - 1) % results.length
                    });
                }
                break;

            case 'Enter':
                event.preventDefault();
                if (results && results.length && isDefined(cursor)) {
                    this.select(results[cursor]);
                }
                break;

            case 'Escape':
                event.preventDefault();
                this.reset();
                break;

            default:
                this.debug('key: ', event.key);
                return;
        }
    }
    cursor(cursor) {
      this.setState({ cursor });
    }
    search() {
        const {input} = this.state;
        if (input.length < this.props.minLength) {
            this.debug('search() NOT searching (too short): ', input);
            return;
        }
        this.debug('search() input:', input);
        this.setState({
          search:     input,
          searching:  true,
        });
        if (this.props.onSearch) {
            this.props.onSearch(this, input);
        }
    }
    searchResults(results) {      // old name - need to fix calling code before removing
        this.results(results);
    }
    results(results) {
        this.debug('results() ', results);
        this.setState({
            results,
            searching: false,
            cursor: 0
        });
    }
    select(result) {
        this.debug('select() result:', result);
        const value = result;
        const {displayValue} = this.props;
        const input = isDefined(result)
          ? displayValue
            ? displayValue(result)
            : result.text
          : '';
        this.setState({
            input,
            value,
            result:    result,
            searching: false,
            search:    undefined,
            results:   undefined,
            cursor:    undefined,
        });
        if (this.props.onSelect) {
            this.debug('calling onSelect with result: ', result);
            this.props.onSelect(result);
        }
    }
    renderResults() {
        const props = this.props;
        const {renderResult} = props;
        const {cursor, results} = this.state;
        return <div className="options">
          { results.length
            ? results.map(
                (result, n) => {
                  let active = isDefined(cursor) && results[cursor] === result;
                  return <div
                    className={`option ${active ? 'selected' : ''}`}
                    onClick={() => this.select(result)}
                    onMouseEnter={() => this.cursor(n)}
                    key={result.id||result.value||n}
                  >
                    { renderResult
                      ? renderResult(result, active)
                      : <div className="result">{result.text}</div>
                    }
                  </div>
                }
              )
            : <div className="no-results">No matches</div>
          }
        </div>
    }
    render() {
        const props = this.props;
        const {disabled, inputClass, placeholder, ariaLabel, loadingIcon, searchIcon, clearIcon} = props;
        const {input, focussed, searching, results} = this.state;

        const cname = classNames(
            props, 'search select',
            disabled && 'disabled',
            focussed && 'focus',
            searching && 'searching',
            results && focussed ? 'open' : 'closed'
        );
        return <div className={cname} onKeyDown={this.keypress}>
          <input
            className={`input ${inputClass||''}`} type="text" placeholder={placeholder}
            value={input} onChange={this.change}
            onFocus={this.focus} onBlur={this.blur}
            autoComplete="chrome-is-broken" tabIndex="0" aria-label={ariaLabel || placeholder}
          />
          { searching
            ? <Icon name={loadingIcon} className="loading" spin onClick={this.clear}/>
            : input && input.length
              ? <Icon name={clearIcon} className="clear" onClick={this.clear}/>
              : <Icon name={searchIcon}/>
          }
          { results
            ? this.renderResults()
            : null
          }
        </div>
    }
}


export default Themed(Search, 'Search');
