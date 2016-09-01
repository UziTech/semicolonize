'use babel';

import { CompositeDisposable } from 'atom';

export default {

	modalPanel: null,
	subscriptions: null,

	activate(state) {

		// Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
		this.subscriptions = new CompositeDisposable();

		// Register command that toggles this view
		this.subscriptions.add(atom.commands.add "atom-workspace atom-text-editor:not([mini])", "semicolonize:semicolonize", _ => {
			editor = atom.workspace.getActiveTextEditor();
			editor.moveToEndOfLine();
			editor.insertText(";");
			editor.insertNewline();
		});
	},

	deactivate() {
		this.subscriptions.dispose();
	},


};
