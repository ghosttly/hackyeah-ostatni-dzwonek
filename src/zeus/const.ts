/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	DialogueRole: "enum" as const,
	Query:{
		getUniByTags:{

		}
	},
	Mutation:{
		createBotDialogue:{
			userPayload:"DialogueInput",
			botPayload:"DialogueInput"
		},
		reactOnConversation:{

		}
	},
	DialogueInput:{
		role:"DialogueRole"
	}
}

export const ReturnTypes: Record<string,any> = {
	University:{
		name:"String",
		paths:"Path"
	},
	Job:{
		_id:"String",
		conversationCountWhenCreated:"Int",
		createdAt:"String",
		file:"String",
		tuneId:"String"
	},
	Query:{
		getUniByTags:"Path",
		listJobs:"Job",
		listUnis:"University"
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
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}