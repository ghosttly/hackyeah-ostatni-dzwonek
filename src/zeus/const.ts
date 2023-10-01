/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		suggestionUnivesties:{

		}
	},
	DialogueInput:{
		role:"DialogueRole"
	},
	DialogueRole: "enum" as const,
	Mutation:{
		createBotDialogue:{
			userPayload:"DialogueInput",
			botPayload:"DialogueInput"
		},
		reactOnConversation:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Query:{
		listJobs:"Job",
		suggestionUnivesties:"Path"
	},
	Path:{
		_id:"String",
		name:"String",
		tags:"String",
		university:"University"
	},
	Mutation:{
		createBotDialogue:"String",
		reactOnConversation:"Boolean",
		testEndpoint:"Boolean",
		useFineTuneJob:"Boolean"
	},
	University:{
		name:"String",
		paths:"Path",
		website:"String"
	},
	Job:{
		_id:"String",
		conversationCountWhenCreated:"Int",
		createdAt:"String",
		files:"String",
		fineTuneModel:"String",
		tuneId:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}