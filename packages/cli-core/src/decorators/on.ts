import {StoreMerge} from "@tsed/core";

export function On(hookName: string, cmdName: string): MethodDecorator {
  return (target, propertyKey) => {
    StoreMerge(hookName, {
      [cmdName]: [propertyKey]
    })(target);
  };
}
