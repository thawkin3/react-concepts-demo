import React, { Component, PureComponent } from 'react';

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: 'take out the trash', done: false, notes: ['boring'] },
        { title: 'walk dog', done: true, notes: ['exercise'] },
        { title: 'read about React', done: false, notes: ['fun!'] },
      ]
    };
    this.todoInterval = null;
  }

  refreshTodos = () => {
    this.setState(prevState => ({ todos: [...prevState.todos] }));
  }

  render() {
    console.log('Todos render called');
    const TodoItem = this.props.usePureComponent ? TodoItemPureComponent : TodoItemComponent;
    return (
      <div>
        <button
          type="button"
          onClick={this.refreshTodos}
        >
          Refresh Todos
        </button>
        {this.state.todos.map((todo, i) => {
          return (<TodoItem
            key={i}
            title={todo.title}
            done={todo.done}
            notes={todo.notes}
          />);
        })}
      </div>
    );
  }
}

class TodoItemComponent extends Component {
  render() {
    console.log('TodoItem (Component) render called');
    return (<div>
      {this.props.done ? '✓': '▢'} {this.props.title}
      ({this.props.notes.join(', ')})
    </div>);
  }
}

class TodoItemPureComponent extends PureComponent {
  render() {
    console.log('TodoItem (PureComponent) render called');
    return (<div>
      {this.props.done ? '✓': '▢'} {this.props.title}
      ({this.props.notes.join(', ')})
    </div>);
  }
}

class Demo6 extends Component {
  render() {
    return (
      <div className="demo-section pure-component-demo-6">
        <h3>Demo 6 - Todo List Comparing React.Component and React.PureComponent</h3>
        <p>Here we have two <code>TodoList</code> components. One of the todo lists uses <code>React.Component</code> for
          its child <code>TodoItem</code> components, and the other todo list uses <code>React.PureComponent</code> for
          its child <code>TodoItem</code> components. Clicking the Refresh Todos button will update the state for the
          parent <code>TodoList</code> component with the exact same list of todo items. Note how the todo items that
          extend <code>React.PureComponent</code> don't re-render because their props did not change, while the todo items
          that extend <code>React.Component</code> do re-render simply because their parent component re-rendered.</p>
        <p>Open up your browser's JavaScript console and then interact with the demo to see console logs when each
          component re-renders.</p>
        <h4>Using a TodoItem with React.Component</h4>
        <TodoList usePureComponent={false} />
        <h4>Using a TodoItem with React.PureComponent</h4>
        <TodoList usePureComponent />
      </div>
    );
  }
}

export default Demo6;
