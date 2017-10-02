import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Store, State, Action } from 'base';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Calculator } from 'app/containers/calculator/models';

@Component({
  selector: 'base-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit, OnDestroy { //, OnChanges {
  data$: Observable<Calculator>;

  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.calculator);
    //  this.data$.subscribe(data=>{

    //    this.display = data.display;  
    //  });

  }

  // ngOnChanges(){
  //   this.display=this.store.select('display');

  // }

  ngOnDestroy() {
    //  this.subscription.unsubscribe();  
  }

  // private subscribe = (data) => {
  //   this.display = data.display;
  //   console.log(data.display);
  // }
}

// import { Record } from 'immutable';
// import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
// import React, { Component } from 'react';
// import classNames from 'classnames/bind';

// import styles from './styles.css';

// export class Display extends Component {

//   static propTypes = {
//     Calculator: PropTypes.instanceOf(Record).isRequired
//   };

//   render () {
//     /* eslint  react/jsx-no-bind: 0 */
//     const cx = classNames.bind(styles);
//     const display = this.props.Calculator.display;

//     const classDisplay = cx({
//       Fade : this.props.Calculator.resetDisplay
//     });

//     return (
//       <div className={ styles.Display }>
//         <span className={ classDisplay }>{ display }</span>
//       </div>
//     );
//   }}

// export default connect(
//   (state) => ({ Calculator: state.Calculator })
// )(Display);
