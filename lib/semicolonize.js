'use babel';

import { CompositeDisposable } from 'atom';

export default {

	subscriptions: null,

	activate(state) {

		// Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
		this.subscriptions = new CompositeDisposable();

		// Register commands
		this.subscriptions.add(atom.commands.add("atom-workspace atom-text-editor:not([mini])", "semicolonize:semicolonize", _ => {
			editor = atom.workspace.getActiveTextEditor();
			editor.moveToEndOfLine();
			editor.insertText(";");
			editor.insertNewline();
		}));
		this.subscriptions.add(atom.commands.add("atom-workspace atom-text-editor:not([mini])", "semicolonize:commanize", _ => {
			editor = atom.workspace.getActiveTextEditor();
			editor.moveToEndOfLine();
			editor.insertText(",");
			editor.insertNewline();
		}));
	},

	deactivate() {
		this.subscriptions.dispose();
	},


};
