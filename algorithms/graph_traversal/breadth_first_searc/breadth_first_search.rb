graph = {}
graph['you'] = ['alice', 'bob', 'claire'] 
graph['bob'] = ['anuj', 'peggy'] 
graph['alice'] = ['peggy'] 
graph['claire'] = ['thom', 'jonny'] 
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []

def bfs(graph)
  queue = []
  queue += graph['you']

  while queue
    person = queue.pop
    if person_is_seller(person)
      p person + ' is a mango seller'
      return true
    else
      queue += graph[person]
    end
  end
  return false

end

def person_is_seller(name)
  name[-1] == 'm'
end

bfs(graph)