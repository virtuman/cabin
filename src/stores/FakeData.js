import Immutable from 'immutable';
export default Immutable.fromJS({
  ClustersStore: {
    'test': { url: 'test', name: 'Test Cluster', username: 'foo', password: 'bar', status: 'RUNNING', namespaces: ['default', 'custom-namespace'] },
  },
  PodsStore: {
    status: {'test': 'success'},
    pods: {
      'test': [
        { kind: 'pods',
          metadata: {
            name: 'Pod A',
            resourceVersion: 99,
            uid: '123456789',
            labels: {
              hostname: 'test',
              env: 'prod',
            },
          },
          status: {
            containerStatuses: [
              { ready: true },
              { ready: true },
            ],
          },
          spec: {
            containers: [
              { name: 'Container 1', image: 'image-nginx-test' },
            ],
          },
        },
      ],
    },
  },
  ServicesStore: {
    status: {'test': 'success'},
    services: {
      'test': [
        {kind: 'services', metadata: { name: 'Service A', creationTimestamp: '2016-07-14T23:45:20Z' }, spec: { type: 'ClusterIP', ports: [{name: 'https', port: '443'}]}},
        {kind: 'services', metadata: { name: 'Service B', creationTimestamp: '2015-07-14T23:45:20Z' }, spec: { type: 'ClusterIP', ports: [{name: 'https', port: '443'}]}},
        {kind: 'services', metadata: { name: 'Service C', creationTimestamp: '2016-03-14T23:45:20Z' }, spec: { type: 'ClusterIP', ports: [{name: 'https', port: '443'}]}},
      ],
    },
  },
  ReplicationsStore: {
    status: {'test': 'success'},
    replications: {
      'test': [
        {kind: 'replications', metadata: { name: 'Replication Controller A' }},
        {kind: 'replications', metadata: { name: 'Replication Controller B' }},
      ],
    },
  },
  NodesStore: {
    status: {'test': 'success'},
    nodes: {
      'test': [
        { kind: 'nodes',
          metadata: { name: 'Node-A', creationTimestamp: '2016-07-14T23:45:20Z'},
          status: {
            addresses: [{address: '10.11.12.13', type: 'InternalIP'}],
            conditions: [{type: 'Ready', status: 'True'}],
          },
        },
      ],
    },
  },
});
