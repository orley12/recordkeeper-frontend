import React from 'react';
import { Input } from './input';
import '../component_styles/form.css';

export const Form = ({ users }) => {
    return (
        <div>
          <form>
            <div className="Col-10">
              <div>
                <Input />
                <Input />
                <Input />
                <Input />
              </div>
              <div>
                <Input />
                <Input />
                <Input />
                <Input />
              </div>
            </div>
            {/* { (users)? users.map((user, index) => {
                return (
                  <Input />
                );
              }) : <Input /> 
            } */}
          </form>
        </div>
    );
}