import React from 'react';
import classNames from 'classnames'; // 조건부 이름 주기
import './TodoListitem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return(
        <div className="TodoListItem">
            { /* 체크를 조건으로 */ }
            <div className={classNames('checkbox', {checked})} onClick={() => onToggle(id)}>
                ✅ <div className="text">{text}</div>
            </div>
            {/* 버튼을 클릭하면 onRemove 함수에 id를 넣어 호출 */}
            <div className="remove" onClick={() => onRemove(id)}>
                ❌
            </div>
        </div>
    );
};

export default TodoListItem;