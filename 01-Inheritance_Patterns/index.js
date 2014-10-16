function ajaxRequest(method, path, callback){
    console.log('ajaxRequest: %s %s', method, path);
    callback.success();
    //callback.failure();
}

// To create a field, instantiate the class:
var titleClassicalField = new ClassicalEditInPlaceField('titleClassical', $('eipClassicalTextField'), 'eipClassicalTextField');
var titleClassicalArea = new ClassicalEditInPlaceArea('titleClassical', $('eipClassicalTextArea'), 'eipClassicalTextArea');

console.log(titleClassicalField.getValue());
console.log(titleClassicalArea.getValue());


var titlePrototypalField = clone(PrototypalEditInPlaceField);
titlePrototypalField.configure('titlePrototypal', $('eipPrototypalTextField'), 'eipPrototypalTextField');

var titlePrototypalArea = clone(PrototypalEditInPlaceArea);
titlePrototypalArea.configure('titlePrototypal', $('eipPrototypalTextArea'), 'eipPrototypalTextArea');

console.log(titlePrototypalField.getValue());
console.log(titlePrototypalArea.getValue());


var titleMixinField = new MixinEditInPlaceField('titleMixin', $('eipMixinTextField'), 'eipMixinTextField');
console.log(titleMixinField.getValue());

var titleMixinField = new MixinEditInPlaceArea('titleMixin', $('eipMixinTextArea'), 'eipMixinTextArea');
console.log(titleMixinField.getValue());
